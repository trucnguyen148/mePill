import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateProfilePage } from './private-profile';

@NgModule({
  declarations: [
    PrivateProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateProfilePage),
  ],
})
export class PrivateProfilePageModule {}
