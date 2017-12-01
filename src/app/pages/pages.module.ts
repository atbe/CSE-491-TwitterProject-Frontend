import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgbTabsetModule,
    MatProgressSpinnerModule
  ],
  providers: [],
})
export class PagesModule { }
