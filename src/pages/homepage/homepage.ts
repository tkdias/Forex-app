import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddPage } from '../add/add';
import { UpdatePage } from '../update/update';
import { SearchPage } from '../search/search';
import { DeletePage } from '../delete/delete';

/**
 * Generated class for the HomepagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    Add(){
      this.navCtrl.push(AddPage);
    }

    Update(){
    this.navCtrl.push(UpdatePage);
  }

    Search(){
    this.navCtrl.push(SearchPage);
  }

    Delete(){
    this.navCtrl.push(DeletePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
