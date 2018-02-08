import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageaccountPage } from './manageaccount';

@NgModule({
  declarations: [
    ManageaccountPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageaccountPage),
  ],
})
export class ManageaccountPageModule {}
