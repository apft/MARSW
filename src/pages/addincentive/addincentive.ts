import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the AddincentivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addincentive',
  templateUrl: 'addincentive.html',
})
export class AddincentivePage {
			// id = localstorgaedata.. 

		  incentive = {title: '', points: '', description: '', instructor: '1'};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddincentivePage');
  }



addIncentive() {

  this.authService.postData(this.incentive, 'api/incentive/add').then((result) => {

    console.log(result);
this.presentToast("Incentive Added.");
  }, (err) => {
    console.log(err);
  });

  
  }

}
