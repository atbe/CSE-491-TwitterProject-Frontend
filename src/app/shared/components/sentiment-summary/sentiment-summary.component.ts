import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TweetSentiment } from '../../../models/tweet-sentiment';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-sentiment-summary',
  templateUrl: './sentiment-summary.component.html',
  styleUrls: ['./sentiment-summary.component.less']
})
export class SentimentSummaryComponent implements OnInit {
  @Input() tweetId: string;
  public loading = true;
  sentiment: Observable<TweetSentiment>;
  readonly type = 'doughnut';
  readonly data = {
    labels: ['Positive Replies', 'Negative Replies', 'Neutral Replies'],
    datasets: [
      {
        label: 'Reply Summary',
        data: [0, 0, 0],
        backgroundColor: ['#5AA454', '#A10A28', '#C7B42C']
      }
    ]
  };

  readonly options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.loadSentiment();
  }

  private loadSentiment() {
    this.sentiment = this.db.doc(`sentiment/${this.tweetId}`).valueChanges();

    this.sentiment.subscribe(
      (sentiment: TweetSentiment) => {
        if (sentiment) {
          this.data.datasets[0].data = [sentiment.positiveCount, sentiment.negativeCount, sentiment.neutralCount
          ];
          this.loading = false;
        }
      }
    );
  }
}
