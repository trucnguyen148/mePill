import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { TreatmentPage } from '../pages/treatment/treatment';
import { ChattingPage } from '../pages/chatting/chatting';
import { CalenderPage } from '../pages/calender/calender';
import { ProfilePage } from '../pages/profile/profile';
import { PrivateProfilePage } from '../pages/private-profile/private-profile';
import { OrderHistoriesPage } from '../pages/order-histories/order-histories';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    TreatmentPage,
    ChattingPage,
    CalenderPage,
    ProfilePage,
    PrivateProfilePage,
    OrderHistoriesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HomePage,
    TreatmentPage,
    ChattingPage,
    CalenderPage,
    ProfilePage,
    PrivateProfilePage,
    OrderHistoriesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
