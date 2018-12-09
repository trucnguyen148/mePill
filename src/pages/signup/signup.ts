import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerifyPage } from '../verify/verify';
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
  verigyPage: VerifyPage;
  loginPage: LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goVerifyPage(){
      this.navCtrl.setRoot(VerifyPage);
  }

  goLoginpPage(){
      this.navCtrl.setRoot(LoginPage);
  }

}
