import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the EditincentivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editincentive',
  templateUrl: 'editincentive.html',
})
export class EditincentivePage {

			// id = localstorgaedata.. 

			  incentive = {id: '', title: '', points: '', description: '', instructor: '1'};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditincentivePage');
  }



  editIncentive() {

  this.authService.postData(this.incentive, 'api/incentive/edit/'+id).then((result) => {

    console.log(result);
this.presentToast("Incentive updated.");
  }, (err) => {
    console.log(err);
  });

  
  }

}
