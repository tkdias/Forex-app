import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { HomepagePage } from '../homepage/homepage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


      homepage()
      {
        this.navCtrl.push(HomepagePage);
      }



}
