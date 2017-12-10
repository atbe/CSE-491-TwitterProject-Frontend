import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tweet } from '../../models/tweet';
import { AngularFirestore } from 'angularfire2/firestore';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public tweets: Observable<Tweet[]>;
  public loading = true;
  public length = 0;
  readonly pageSize = 10;
  private oldIndex = 0;
  private lastId: string = null;
  private pageEvent: PageEvent;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db.collection('/tweets').snapshotChanges().first().toPromise().then(
      (c) => {
        this.length = c.length;
        this.loadTweets();
      });
  }

  private loadTweets() {
    this.tweets = this.db.collection('tweets', ref => ref
      .where('is_quote_status', '==', false)
      .limit(this.pageSize)
      .orderBy('id', 'desc')
    ).valueChanges();
    this.recordFirstLastTweetIds();
  }

  public pageChange(event: PageEvent) {
    console.log(event);
    this.loading = true;
    if (event.pageIndex > this.oldIndex) {
      console.log('Next page');
      this.tweets = this.db.collection('tweets', ref => ref
        .where('is_quote_status', '==', false)
        .limit(this.pageSize)
        .orderBy('id_str', 'desc')
        .startAfter(this.lastId)
      ).valueChanges();
    } else {
      console.log('Previous page');
      this.tweets = this.db.collection('tweets', ref => ref
        .where('is_quote_status', '==', false)
        .limit(this.pageSize)
        .orderBy('id_str', 'desc')
        .endBefore(this.lastId)
      ).valueChanges();
    }
    this.pageEvent = event;
    this.oldIndex = event.pageIndex;
    this.recordFirstLastTweetIds();
  }

  private recordFirstLastTweetIds() {
    this.tweets.first().toPromise().then(
      (tweets: Tweet[]) => {
        this.lastId = tweets[tweets.length - 1].id_str;
        this.loading = false;
      }
    );
  }
}
