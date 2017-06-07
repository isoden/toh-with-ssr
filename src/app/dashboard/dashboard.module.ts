import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { DashboardResolver } from './dashboard.resolver';

@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent,
  ],
  providers: [
    DashboardResolver,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path     : '',
        resolve  : {
          heroes: DashboardResolver,
        },
        component: DashboardComponent,
      }
    ])
  ]
})
export class DashboardModule {}
