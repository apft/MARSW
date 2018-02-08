import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManageaccountPage } from '../manageaccount/manageaccount';
import { AddincentivePage } from '../addincentive/addincentive';
import { EditincentivePage } from '../editincentive/editincentive';
import { buyPage } from '../buy/buy';



/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  manageaccountpage(){
    this.navCtrl.push(ManageaccountPage);
  }

  manageaccountpage1(){
    this.navCtrl.push(AddincentivePage);
  }

  manageaccountpage2(){
    this.navCtrl.push(EditincentivePage);
  }

  buypage(){
    this.navCtrl.push(buyPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainpagePage');
  }

}
