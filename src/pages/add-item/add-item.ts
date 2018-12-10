import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;
  items;
  langs;
  langForm;



  constructor(public navCtrl: NavController, public view: ViewController){
  this.langForm = new FormGroup({
      "langs": new FormControl()
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  initializeItems() {

    this.items = [
      {
        'title': 'Amsterdam',
        'description': '0449214167',
        'color': '#E63135'
      },
      {
        'title': 'Bogota',
        'description': '0449214167',
        'color': '#E63135'
      },
      {
        'title': 'Buenos Aires',
        'description': '0449214167',
        'color': '#E63135'
      },
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  saveItem(){

    let newItem = {
      title: this.title,
      description: this.description,
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

}
