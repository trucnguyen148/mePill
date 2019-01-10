import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { VerifyPage } from '../pages/verify/verify';
import { HomePage } from '../pages/home/home';
import { TreatmentPage } from '../pages/treatment/treatment';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ChattingPage } from '../pages/chatting/chatting';
import { CalendarPage } from '../pages/calendar/calendar';
import { ProfilePage } from '../pages/profile/profile';
import { PrivateProfilePage } from '../pages/private-profile/private-profile';
import { OrderHistoriesPage } from '../pages/order-histories/order-histories';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarModule } from 'ionic3-calendar-en';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { IonicPageModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';



@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    VerifyPage,
    HomePage,
    TreatmentPage,
    AddItemPage,
    ItemDetailPage,
    ChattingPage,
    CalendarPage,
    ProfilePage,
    PrivateProfilePage,
    OrderHistoriesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    IonicPageModule.forChild(AddItemPage),
    SelectSearchableModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    VerifyPage,
    HomePage,
    TreatmentPage,
    AddItemPage,
    ItemDetailPage,
    ChattingPage,
    CalendarPage,
    ProfilePage,
    PrivateProfilePage,
    OrderHistoriesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
