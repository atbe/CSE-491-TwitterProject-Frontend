import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { TweetStatisticsComponent } from '../../pages/tweet-statistics/tweet-statistics.component';
import { RouterModule } from '@angular/router';
import { TopHashtagsComponent } from './top-hashtags/top-hashtags.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponsiveModule } from 'ng2-responsive';
import { AgWordCloudModule } from 'angular4-word-cloud';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { ChartModule } from 'angular2-chartjs';
import { SentimentSummaryComponent } from "./sentiment-summary/sentiment-summary.component";
import { RepliesOverTimeGraphComponent } from './replies-over-time-graph/replies-over-time-graph.component';

@NgModule({
  declarations: [
    TweetComponent,
    ToolbarComponent,
    TweetStatisticsComponent,
    TopHashtagsComponent,
    WordCloudComponent,
    SentimentSummaryComponent,
    RepliesOverTimeGraphComponent
  ],
  exports: [
    TweetComponent,
    ToolbarComponent,
    TweetStatisticsComponent,
    TopHashtagsComponent,
    WordCloudComponent,
    SentimentSummaryComponent,
    RepliesOverTimeGraphComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    NgbModule,
    NgbCollapseModule,
    ResponsiveModule,
    AgWordCloudModule,
    MatProgressSpinnerModule,
    ChartModule
  ],
  providers: [],
})
export class SharedComponentsModule { }
