import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { ResponsiveModule } from 'ng2-responsive';

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
    MatProgressSpinnerModule,
    NgbTooltipModule,
    ResponsiveModule,
    NgbCollapseModule,
    MatPaginatorModule
  ],
  providers: [],
})
export class PagesModule { }
