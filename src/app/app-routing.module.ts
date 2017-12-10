import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TweetStatisticsComponent } from './pages/tweet-statistics/tweet-statistics.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'tweet/:id', component: TweetStatisticsComponent, data: { state: 'tweet' } },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
