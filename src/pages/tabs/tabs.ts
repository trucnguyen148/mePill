import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TreatmentPage } from '../treatment/treatment';
import { ChattingPage } from '../chatting/chatting';
import { CalenderPage } from '../calender/calender';
import { ProfilePage } from '../profile/profile';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TreatmentPage;
  tab3Root = ChattingPage;
  tab4Root = CalenderPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
