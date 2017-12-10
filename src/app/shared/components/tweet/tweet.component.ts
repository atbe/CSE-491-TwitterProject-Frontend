import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../../../models/tweet';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { TweetSentiment } from '../../../models/tweet-sentiment';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  @Input() analyzeButton = true;
  replyCount = 0;

  constructor(private router: Router, private db: AngularFirestore) {}

  ngOnInit() {
    this.db.doc(`sentiment/${this.tweet.id_str}`)
      .valueChanges()
      .subscribe((sentiment: TweetSentiment) => this.replyCount = sentiment.count);
  }

  goToTweetAnalysis() {
    this.router.navigate(['/tweet', this.tweet.id_str]);
  }
}
