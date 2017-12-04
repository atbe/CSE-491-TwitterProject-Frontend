import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.less']
})
export class WordCloudComponent implements OnInit {
  @Input() tweetId: string;
  public loading = true;
  public wordData: any[];
  public options = {
    settings: {
      minFontSize: 20,
      maxFontSize: 150,
    },
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },
    labels: true
  };

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.db.collection(`words/${this.tweetId}/${this.tweetId}`, (ref => ref.
      orderBy('count', 'desc')
        .limit(50)
    )).valueChanges().subscribe((words) => {
      this.wordData = words.map((word: any) => {
        return { text: word.text, size: word.count };
      });
      this.loading = false;
    });
  }
}
