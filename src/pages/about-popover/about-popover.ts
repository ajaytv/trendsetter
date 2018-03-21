import { Component } from '@angular/core';

import { App, NavParams, NavController, ModalController, ViewController } from 'ionic-angular';
import { AboutPage } from '../about/about';
@Component({
  template: `
    <ion-list>
      <button ion-item (click)="showdesc()">Summary Plan Description</button>
      <button ion-item (click)="showdocs()">Other Plan Documents</button>
      <button ion-item (click)="close('http://showcase.ionicframework.com')">Dates and Ages</button>
      <button ion-item (click)="support()">Support</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(
    
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    
  ) { }
  ngOnInit()
  {
    
  }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }
  showdocs() {
this.navCtrl.push(AboutPage,{params:'Other plan documents'});
  }
  showdesc() {
    this.navCtrl.push(AboutPage,{params:'Summary Plan Description'});
      }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }
}