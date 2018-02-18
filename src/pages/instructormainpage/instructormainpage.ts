import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManageaccountPage } from '../manageaccount/manageaccount';
import { ManageincentivePage } from '../manageincentive/manageincentive';
import { StatisticsPage } from '../statistics/statistics';

/**
 * Generated class for the InstructormainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instructormainpage',
  templateUrl: 'instructormainpage.html',
})
export class InstructormainpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructormainpagePage');
  }


  StatisticsPage() {
    this.navCtrl.push(StatisticsPage);
  }

  manageincentivepage() {
    this.navCtrl.push(ManageincentivePage);
  }

  manageaccountpage() {
    this.navCtrl.push(ManageaccountPage);
  }

}
