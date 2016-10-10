import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
import {Http} from '@angular/http';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/perfil/perfil.html',
})
export class PerfilPage {

  
    
  constructor(private navCtrl: NavController,private http: Http,private params:NavParams) {
  
  }

   

}
