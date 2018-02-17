import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

import { HomePage } from '../home/home';



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//AuthService


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


responseData: any;
  userData = {id: '', f_name: '', l_name: '', email: '', password: ''};
  user = {id: '', f_name: '', l_name: '', email: '', password: ''};



  users: any;



constructor(public navCtrl : NavController, public authService : AuthService, private toastCtrl:ToastController) {
  this.getUsers();
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    if(this.userData.id && this.userData.f_name  && this.userData.l_name && this.userData.email && this.userData.password){
      //Api connections
    this.authService.postData(this.userData, "signup").then((result) =>{
    this.responseData = result;
    if(this.responseData.userData){
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData) )
      this.navCtrl.push(HomePage);
    }
    else{
      this.presentToast("Please give valid username and password");
    }
    
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    console.log("Give valid information.");
  }
  
  }

  login() {
    this
      .navCtrl
      .push(HomePage);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getUsers() {
    this.authService.getData('api/students')
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  saveUser() {
   // if(this.userData.id && this.userData.f_name  && this.userData.l_name && this.userData.email && this.userData.password){

  this.authService.postData(this.user, 'signup').then((result) => {

    console.log(result);
    login();

  }, (err) => {
    console.log(err);
  });

//}
//else {
//    console.log("Give valid information.");
//  }
  
  }

}
