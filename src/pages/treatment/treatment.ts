import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the TreatmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-treatment',
  templateUrl: 'treatment.html',
})
export class TreatmentPage {
  public items = [];
  public base64Image:string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private camera: Camera) {

  }


  ionViewDidLoad(){

  }

  takePhoto() {
      const options: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
          // Handle error
          alert(err)
      });
  }

  addItem(){

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {

          if(item){
            this.saveItem(item);
          }

    });

    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item,
    });
  }

}
