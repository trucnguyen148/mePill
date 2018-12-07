import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateProfilePage');
  }

}
