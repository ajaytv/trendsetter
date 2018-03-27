import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import {SupportPage} from '../support/support';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerDetailPage;
  tab3Root: any = MapPage;
  tab4Root: any = LoginPage;
  tab5Root: any = SpeakerListPage;
  tab6Root: any = SupportPage;
    
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
