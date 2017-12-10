import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-top-hashtags',
  templateUrl: './top-hashtags.component.html',
  styleUrls: ['./top-hashtags.component.less']
})
export class TopHashtagsComponent implements OnInit {
  @Input() tweetId: string;
  hashtags: Observable<any>;
  loading = true;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.hashtags = this.db.collection(`hashtags/${this.tweetId}/${this.tweetId}`, (ref => ref.
      orderBy('count', 'desc')
        .limit(10)
    )).valueChanges();

    this.hashtags.subscribe((hashtags) => {
      this.hashtags = hashtags;
      this.loading = false;
    });
  }

}
