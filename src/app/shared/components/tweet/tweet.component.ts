import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../../../models/tweet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  @Input() analyzeButton = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToTweetAnalysis() {
    this.router.navigate(['/tweet', this.tweet.id_str]);
  }
}
