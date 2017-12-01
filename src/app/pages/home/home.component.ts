import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tweet } from '../../models/tweet';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  tweets: Observable<Tweet[]>;

  constructor(db: AngularFirestore) {
    this.tweets = db.collection('tweets', ref => ref
      .where('is_quote_status', '==', false)
      .limit(10)
      .orderBy('id', 'desc')
    ).valueChanges();
  }

  ngOnInit() {
  }
}
