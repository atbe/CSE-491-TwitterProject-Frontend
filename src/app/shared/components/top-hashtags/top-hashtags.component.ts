import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-top-hashtags',
  templateUrl: './top-hashtags.component.html',
  styleUrls: ['./top-hashtags.component.less']
})
export class TopHashtagsComponent implements OnInit {
  @Input() hashtags: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
