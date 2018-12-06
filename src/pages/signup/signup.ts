import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login'

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  tabsPage: TabsPage;
  loginPage: LoginPage;

  constructor(public navCtrl: NavController) {}

  goTabsPage(){
      this.navCtrl.setRoot(TabsPage);
  }

  goLoginpPage(){
      this.navCtrl.setRoot(LoginPage);
  }

}
