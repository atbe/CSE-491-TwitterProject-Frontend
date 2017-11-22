import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../../../models/tweet';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;

  constructor(public db: AngularFirestore) {
  }

  ngOnInit() {
  }
}
