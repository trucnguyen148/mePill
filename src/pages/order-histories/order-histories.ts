import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the OrderHistoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-histories',
  templateUrl: 'order-histories.html',
})
export class OrderHistoriesPage {
  profilePage = ProfilePage;

  constructor(public navCtrl: NavController) {

  }

  goProfilePage(){
      this.navCtrl.setRoot(ProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderHistoriesPage');
  }

}
