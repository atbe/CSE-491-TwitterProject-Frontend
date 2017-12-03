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
  @Input() tweetId: string;
  tweet: Tweet;
  sentiment: Observable<TweetSentiment>;
  sentimentValues = [
    {'name': 'Positive', 'value': 0},
    {'name': 'Negative', 'value': 0},
    {'name': 'Neutral', 'value': 0}
  ];

  readonly pieChartView: number[] = [600, 300];
  readonly pieChartColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  hashtags: Observable<any>;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.tweetId = params['id'];
      this.tweet = await this.getTweet();
      this.setupStatistics();
    });
  }

  private async getTweet(): Promise<Tweet> {
    return this.db.doc(`tweets/${this.tweetId}`).valueChanges().first().toPromise();
  }

  private setupStatistics(): void {
    this.sentiment = this.db.doc(`sentiment/${this.tweetId}`).valueChanges();
    this.hashtags = this.db.collection(`hashtags/${this.tweetId}/${this.tweetId}`, (ref => ref.
      orderBy('count', 'desc')
        .limit(10)
    )).valueChanges();

    this.setupSentimentSubscriber();
  }

  private setupSentimentSubscriber() {
    this.sentiment.subscribe(
      (sentiment: TweetSentiment) => {
        if (sentiment) {
          this.sentimentValues = [
            {'name': 'Positive', 'value': sentiment.positiveCount},
            {'name': 'Negative', 'value': sentiment.negativeCount},
            {'name': 'Neutral', 'value': sentiment.neutralCount}
          ];
        }
      }
    );
  }
}
