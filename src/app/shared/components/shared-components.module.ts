import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TweetComponent
  ],
  exports: [
    TweetComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class SharedComponentsModule { }
