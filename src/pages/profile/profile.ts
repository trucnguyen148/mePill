import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivateProfilePage } from '../private-profile/private-profile';
import { OrderHistoriesPage } from '../order-histories/order-histories';
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
  privateprofilePage =  PrivateProfilePage;
  orderhistoriesPage = OrderHistoriesPage;


  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'name': 'Nguyen Thi Thanh Truc',
        'phone': '0449214167',
        'color': '#E63135'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(PrivateProfilePage, { item: item });
  }

  goPrivateProfilePage(){
      this.navCtrl.setRoot(PrivateProfilePage);
  }

  goOrderHistoriesPage(){
      this.navCtrl.setRoot(OrderHistoriesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }



}
