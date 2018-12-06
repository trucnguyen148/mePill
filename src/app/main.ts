import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'private-profile.html',
})
export class PrivateProfilePage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}
