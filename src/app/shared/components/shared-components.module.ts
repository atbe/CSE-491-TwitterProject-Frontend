import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    TweetComponent,
    ToolbarComponent
  ],
  exports: [
    TweetComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
})
export class SharedComponentsModule { }
