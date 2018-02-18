import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the ManageaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manageaccount',
  templateUrl: 'manageaccount.html',
})
export class ManageaccountPage {
		// id = StorageUserData.id ;
	  user = {f_name: '', l_name: '', email: '', password: ''};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageaccountPage');
  }


updateUser() {

// if Instructor or Student ? ..

  this.authService.postData(this.user, 'api/student/update/435107528').then((result) => {

    console.log(result);
this.presentToast("Account information updated.");
  }, (err) => {
    console.log(err);
  });

  
  }

}


