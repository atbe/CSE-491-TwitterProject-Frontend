import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../../../models/tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }
}
