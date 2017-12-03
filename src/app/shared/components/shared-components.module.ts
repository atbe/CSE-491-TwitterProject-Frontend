import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet/tweet.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { TweetStatisticsComponent } from './tweet-statistics/tweet-statistics.component';
import { RouterModule } from '@angular/router';
import { TopHashtagsComponent } from './top-hashtags/top-hashtags.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponsiveModule } from 'ng2-responsive';
import { AgWordCloudModule } from 'angular4-word-cloud';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    TweetComponent,
    ToolbarComponent,
    TweetStatisticsComponent,
    TopHashtagsComponent,
    WordCloudComponent
  ],
  exports: [
    TweetComponent,
    ToolbarComponent,
    TweetStatisticsComponent,
    TopHashtagsComponent,
    WordCloudComponent
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
    ChartsModule
  ],
  providers: [],
})
export class SharedComponentsModule { }
