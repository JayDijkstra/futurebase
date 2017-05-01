import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Images } from '../../../../imports/collections';
import { Signal, Image } from '../../../../imports/models';

import template from './images.html';

@Component({
  template
})
export class ImagesPage implements OnInit {
  selectedSignal: Signal;

  constructor(navParams: NavParams) {
    this.selectedSignal = <Signal>navParams.get('signal');

    this.title = this.selectedSignal.title;
    this.picture = this.selectedSignal.picture;

    console.log('Selected chat is: ', this.selectedSignal);
  }

  ngOnInit() {
    let isEven = false;

   this.images = Images.find(
     {signalId: this.selectedSignal._id},
     {sort: {createdAt: 1}}
   ).map((images: Image[]) => {
     images.forEach((image: Image) => {
       image.ownership = isEven ? 'mine' : 'other';
       isEven = !isEven;
     });

     return images;
   });
  }
}
