import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { DashboardResolver } from './dashboard.resolver';
import { DashboardGuard } from './dashboard.guard';

@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent,
  ],
  providers: [
    DashboardGuard,
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
        canActivate: [DashboardGuard],
        component: DashboardComponent,
      }
    ])
  ]
})
export class DashboardModule {}
