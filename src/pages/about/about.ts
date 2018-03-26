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
  public expanding:boolean;
  public down:string;
  
  constructor(public popoverCtrl: PopoverController, public inAppBrowser:InAppBrowser) {this.expanding=false;this.down="More";}
  
      openPdf()
      {
       
          this.inAppBrowser.create(
            `http://kmmc.in/wp-content/uploads/2014/01/lesson2.pdf`,
            '_blank'
          );
        
      }
      viewit()
      {
        this.expanding= !this.expanding;
        if(this.down=="More")
        this.down="less";
        else
        this.down="More";
      }
     
  
}
