import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';



@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: ConferenceData, public platform: Platform) {
  }
  public buttonClicked: boolean = true;
  public buttonClicked1: boolean = true;
  public onButtonClick() {

      this.buttonClicked = !this.buttonClicked;
  }
  public onButtonClick1() {

    this.buttonClicked1 = !this.buttonClicked1;
}

}
