import { Component } from '@angular/core';

import {
  
  ActionSheetController,
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ConferenceData } from '../../providers/conference-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';

// TODO remove

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  factor=[1,0.978,0.876,0.768,8.12];
  abPart= 615;
  slaPart=this.abPart*this.factor[1];
  js5Part=this.abPart*this.factor[2];
  js1Part=this.abPart*this.factor[3];
  lumpPart=Math.ceil(this.abPart*this.factor[4]*12);
  js5Beneficiary=this.js5Part*0.5;
  js1Beneficiary=this.js1Part;
  partscenario =3;
  sgm:string;
 
  

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {
    }
    ionViewWillEnter(){this.sgm="scenario1";}

  ionViewDidLoad() {
    
  
  }

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  goToSpeakerDetail(speaker: any) {
    this.navCtrl.push(SpeakerDetailPage, { speakerId: speaker.id });
  }
  scenario() {
    if(this.partscenario>1) 
      return false;
      else 
      return true;
    
  }
  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
  }

}
