import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManageaccountPage } from '../manageaccount/manageaccount';
import { AddincentivePage } from '../addincentive/addincentive';
import { EditincentivePage } from '../editincentive/editincentive';
import { buyPage } from '../buy/buy';
import { ManageincentivePage } from '../manageincentive/manageincentive';




/**
 * Generated class for the InstructormainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Instructormainpage',
  templateUrl: 'Instructormainpage.html',
})
export class InstructormainpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  manageaccountpage(){
    this.navCtrl.push(ManageaccountPage);
  }

  

  buypage(){
    this.navCtrl.push(buyPage);
  }

 manageincentivepage(){
    this.navCtrl.push(ManageincentivePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructormainpagePage');
  }

}
