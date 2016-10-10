import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import {Http} from '@angular/http';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/notification/notification.html',
})
export class NotificationPage {

 
    
  constructor(private navCtrl: NavController, private http:Http,private alertCtrl: AlertController) {

  }

   
}
