import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPlayerPageRoutingModule } from './details-player-routing.module';

import { DetailsPlayerPage } from './details-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPlayerPageRoutingModule
  ],
  declarations: [DetailsPlayerPage]
})
export class DetailsPlayerPageModule {}
