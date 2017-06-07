import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path     : '',
        component: HeroesComponent,
      }
    ])
  ]
})
export class HeroesModule {}
