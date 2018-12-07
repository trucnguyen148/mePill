import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderHistoriesPage } from './order-histories';

@NgModule({
  declarations: [
    OrderHistoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderHistoriesPage),
  ],
})
export class OrderHistoriesPageModule {}
