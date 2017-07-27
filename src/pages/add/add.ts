import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { ActionSheetController } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {


  feedbackref:any;
  feedbacklistref:any;
  id :any; //id
  fb:any; //feedback

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public af:AngularFire) {
  
    this.feedbackref = firebase.database().ref();
    this.feedbacklistref = this.feedbackref.child('/fb/');
  
  }//public actionSheetCtrl: ActionSheetController, public af:AngularFire

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

   doConfirm(){
      
    let fb = {
      studentid: this.id,
      //feedback : this.fb
    }

    new Promise((resolve)=>{
      this.feedbacklistref.push(fb);
      resolve(true);
    });
  }


}
