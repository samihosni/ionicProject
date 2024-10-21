import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPlayerPage } from './details-player.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPlayerPageRoutingModule {}
