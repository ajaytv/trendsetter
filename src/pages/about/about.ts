import { Component } from '@angular/core';
import { PopoverController, NavParams } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public display:string = 'Summary plan.pdf';
  conferenceDate = '2047-05-17';
  public navparams:NavParams;
  constructor(public popoverCtrl: PopoverController) {}
  
  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
      }
  
}
