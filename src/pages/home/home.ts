import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { NavController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { MainpagePage } from '../mainpage/mainpage';

import { SignupPage } from '../signup/signup';
import { InstructormainpagePage } from '../instructormainpage/instructormainpage';
import { AuthService } from '../../providers/auth-service/auth-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resposeData : any;
  userData = {id: '', f_name: 'a', l_name: 'a', email: 'aa', password: ''};

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController,
   authService : AuthService,  private toastCtrl:ToastController) {


  }

  gotoMain(){
    this.navCtrl.push(MainpagePage);
  }

  gotoInstructorMain(){
    this.navCtrl.push(InstructormainpagePage);
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

 

 login(){
   if(this.userData.id && this.userData.password){
   this.authService.postData(this.userData, 'signup').then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
    if(this.resposeData.userData){
     localStorage.setItem('userData', JSON.stringify(this.resposeData) )
this.navCtrl.push(MainpagePage);
  }
  else{
    this.presentToast("Please give valid username and password");
  }
    


    }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.presentToast("Give username and password");
   }
  
  }

presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

 

}
