import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';

@NgModule({
  declarations: [
    TweetComponent
  ],
  exports: [
    TweetComponent
  ],
  imports: [],
  providers: [],
})
export class SharedComponentsModule { }
