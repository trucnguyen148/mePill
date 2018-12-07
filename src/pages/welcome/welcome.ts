import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  slides = [
      {
        title: "",
        description: "",
        image: "assets/imgs/logo.png",
        footer: "Bản quyền thuộc về công ty TNHH MePill Pharmacy",
      },

      {
        title: "Tư vấn trực tiếp từ  Dược sỹ",
        description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        image: "assets/imgs/welcome1.png",
        footer:""
      },

      {
        title: "Nhắc nhở uống thuốc đúng giờ",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "assets/imgs/welcome2.png",
        footer:""
      },
      {
        title: "Theo dõi tình hình sức khỏe từ xa",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "assets/imgs/welcome3.png",
        footer:""
      },
      {
        title: "Vận chuyển thuốc tận tay",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "assets/imgs/welcome4.png",
        footer:""
      }
    ];

    loginPage: LoginPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    goLoginPage() {
        this.navCtrl.setRoot(LoginPage);
      }

}
