import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { buyPage } from './buy';

@NgModule({
  declarations: [
    buyPage,
  ],
  imports: [
    IonicPageModule.forChild(buyPage),
  ],
})
export class buyPageModule {}
