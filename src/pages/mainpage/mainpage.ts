import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManageaccountPage } from '../manageaccount/manageaccount';
import { buyPage } from '../buy/buy';
import { StatisticsPage } from '../statistics/statistics';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';




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

  scanData: {};
  options: BarcodeScannerOptions;
  public userDetails: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {

   // const data = JSON.parse(localStorage.getItem("userData"));
 // this.userDetails = data.userData;

  }

  manageaccountpage(){
    this.navCtrl.push(ManageaccountPage);
  }

  StatisticsPage() {
    this.navCtrl.push(StatisticsPage);
  }


  buypage(){
    this.navCtrl.push(buyPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainpagePage');
  }

  scan() {
    this.options = {
      prompt: "Scan your barcode to gain score"
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }    

  backToSignin() {
     this.navCtrl.push(HomePage);
  }

  logout() {
    //Api Token Logout
    localStorage.clear();
    setTimeout(() => this.backToSignin(), 1000);
  }
}
