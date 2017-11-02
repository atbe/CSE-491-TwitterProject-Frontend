import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  tweets: Observable<Tweet[]>;

  constructor(db: AngularFirestore) {
    this.tweets = db.collection('tweets').valueChanges();
  }

  ngOnInit() {
  }

}
