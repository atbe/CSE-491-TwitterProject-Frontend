import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';

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
    SharedComponentsModule
  ],
  providers: [],
})
export class PagesModule { }
