import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddincentivePage } from '../addincentive/addincentive';
import { EditincentivePage } from '../editincentive/editincentive';
import { AlertController } from 'ionic-angular';


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
	incentive = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }


addincentivepage(){
    this.navCtrl.push(AddincentivePage);
  }

  editincentivepage(){
    this.navCtrl.push(EditincentivePage);
  }

  

  deleteIncentive(id){
  	  let alert = this.alertCtrl.create({
    title: 'Delete Incentive',
    message: 'Do you want to delete this incentive?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
        	 this.authService.postData(this.incentive, 'api/incentive/edit/'+id).then((result) => {

    console.log(result);
this.presentToast("Incentive deleted.");
  }, (err) => {
    console.log(err);
  });
  

        }
      }
    ]
  });
  alert.present();

}

}

