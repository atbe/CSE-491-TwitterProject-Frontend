import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../../../models/tweet';

@Component({
  selector: 'app-tweet-statistics',
  templateUrl: './tweet-statistics.component.html',
  styleUrls: ['./tweet-statistics.component.less']
})
export class TweetStatisticsComponent implements OnInit {
  @Input() tweetId: string;
  loading = true;
  tweet: Tweet;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.tweetId = params['id'];
      this.tweet = await this.getTweet();
      this.loading = false;
    });
  }

  private async getTweet(): Promise<Tweet> {
    return this.db.doc(`tweets/${this.tweetId}`).valueChanges().first().toPromise();
  }
}
