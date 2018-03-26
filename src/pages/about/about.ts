import { Component } from '@angular/core';
import { PopoverController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public display:string = 'Summary plan.pdf';
  conferenceDate = '2047-05-17';
  public navparams:NavParams;
  constructor(public popoverCtrl: PopoverController, public inAppBrowser:InAppBrowser) {}
  
  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
      }
      openPdf()
      {
       
          this.inAppBrowser.create(
            `http://kmmc.in/wp-content/uploads/2014/01/lesson2.pdf`,
            '_blank'
          );
        
      }
  
}
