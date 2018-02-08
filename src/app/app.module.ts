import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { MainpagePage } from '../pages/mainpage/mainpage';
import { SignupPage } from '../pages/signup/signup';
import { ManageaccountPage } from '../pages/manageaccount/manageaccount';
import { AddincentivePage } from '../pages/addincentive/addincentive';
import { EditincentivePage } from '../pages/editincentive/editincentive';
import { ManageincentivePage } from '../pages/manageincentive/manageincentive';
import { buyPage } from '../pages/buy/buy';
import { InstructormainpagePage } from '../pages/Instructormainpage/Instructormainpage';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainpagePage,
    SignupPage,
    ManageaccountPage,
    AddincentivePage,
    EditincentivePage,
    ManageincentivePage,
    buyPage,
    InstructormainpagePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainpagePage,
    SignupPage,
    ManageaccountPage,
    AddincentivePage,
    EditincentivePage,
    ManageincentivePage,
    buyPage,
    InstructormainpagePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
