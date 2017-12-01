import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { TweetStatisticsComponent } from './tweet-statistics/tweet-statistics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { TopHashtagsComponent } from './top-hashtags/top-hashtags.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TweetComponent,
    ToolbarComponent,
    TweetStatisticsComponent,
    TopHashtagsComponent
  ],
  exports: [
    TweetComponent,
    ToolbarComponent,
    TweetStatisticsComponent,
    TopHashtagsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    NgxChartsModule,
    MatExpansionModule,
    NgbModule,
    NgbCollapseModule
  ],
  providers: [],
})
export class SharedComponentsModule { }
