import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  slides = [
      {
        time: "8:00",
        description: "Đã uống",
        image: "assets/imgs/pill.png",
        name: "PENICILIN...100MG",
        number: "Số lượng 1 viên",
        name1: "PENICILIN...100MG",
        number1: "Số lượng 1 viên",
        name2: "PENICILIN...100MG",
        number2: "Số lượng 1 viên",
        name3: "PENICILIN...100MG",
        number3: "Số lượng 1 viên",

      },

      {
        time: "12:00",
        description: "Chưa uống",
        image: "assets/imgs/pill.png",
      },

      {
        time: "19:00",
        description: "Chưa uống",
        image: "assets/imgs/pill.png",
      }
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
