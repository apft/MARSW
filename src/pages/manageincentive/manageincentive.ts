import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddincentivePage } from '../addincentive/addincentive';
import { EditincentivePage } from '../editincentive/editincentive';

/**
 * Generated class for the manageincentivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manageincentive',
  templateUrl: 'manageincentive.html',
})
export class ManageincentivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


addincentivepage(){
    this.navCtrl.push(AddincentivePage);
  }

  editincentivepage(){
    this.navCtrl.push(EditincentivePage);
  }

  

}
