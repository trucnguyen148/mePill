import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivateProfilePage } from '../private-profile/private-profile';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  privateprofilepage =  PrivateProfilePage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goPrivateProfilePage(){
      this.navCtrl.setRoot(PrivateProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
