import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { TweetSentiment } from '../../../models/tweet-sentiment';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../../../models/tweet';

@Component({
  selector: 'app-tweet-statistics',
  templateUrl: './tweet-statistics.component.html',
  styleUrls: ['./tweet-statistics.component.less']
})
export class TweetStatisticsComponent implements OnInit {
  loading = true;
  private loadingSentiment = true;
  @Input() tweetId: string;
  tweet: Tweet;
  sentiment: Observable<TweetSentiment>;
  sentimentData: number[] = [0, 0, 0];
  readonly sentimentLabels = ['Positive Replies', 'Negative Replies', 'Neutral Replies'];

  readonly pieChartColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.tweetId = params['id'];
      this.tweet = await this.getTweet();
      this.loading = false;
      this.setupSentimentSubscriber();
    });
  }

  private async getTweet(): Promise<Tweet> {
    return this.db.doc(`tweets/${this.tweetId}`).valueChanges().first().toPromise();
  }

  private setupSentimentSubscriber() {
    this.sentiment = this.db.doc(`sentiment/${this.tweetId}`).valueChanges();

    this.sentiment.subscribe(
      (sentiment: TweetSentiment) => {
        if (sentiment) {
          this.sentimentData = [sentiment.positiveCount, sentiment.negativeCount, sentiment.neutralCount
          ];
          this.loadingSentiment = false;
        }
      }
    );
  }
}
