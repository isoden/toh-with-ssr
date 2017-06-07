import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path     : '',
        component: DashboardComponent,
      }
    ])
  ]
})
export class DashboardModule {}
