import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthService } from '../providers/auth-service/auth-service';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

import { MainpagePage } from '../pages/mainpage/mainpage';
import { SignupPage } from '../pages/signup/signup';
import { ManageaccountPage } from '../pages/manageaccount/manageaccount';
import { AddincentivePage } from '../pages/addincentive/addincentive';
import { EditincentivePage } from '../pages/editincentive/editincentive';
import { ManageincentivePage } from '../pages/manageincentive/manageincentive';
import { buyPage } from '../pages/buy/buy';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InstructormainpagePage } from '../pages/instructormainpage/instructormainpage';
import { StatisticsPage } from '../pages/statistics/statistics'




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
    InstructormainpagePage,
    StatisticsPage

  ],
  imports: [
    BrowserModule,HttpClientModule,
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
    InstructormainpagePage,
    StatisticsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
