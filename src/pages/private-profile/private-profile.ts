import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the PrivateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private-profile',
  templateUrl: 'private-profile.html',
})
export class PrivateProfilePage {
  gender: string = "m";
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateProfilePage');
  }

}
