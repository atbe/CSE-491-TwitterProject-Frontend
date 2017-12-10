import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './shared/app-routing.animations';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
