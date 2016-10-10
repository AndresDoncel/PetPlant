import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
import {Http} from '@angular/http';
import {LoginPage} from '../login/login';

import { PerfilPage } from '../perfil/perfil';
import { BuscarPage } from '../buscar/buscar';
import { NotificationPage } from '../notification/notification';
import { AjustesPage } from '../ajustes/ajustes';

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html',
})


export class DashboardPage {

  tab1Root: any = PerfilPage;
  tab2Root: any = BuscarPage;
  tab3Root: any = NotificationPage;
  tab4Root: any = AjustesPage;


  username:String;
  registerDate = "";
  currentDate: Date;
  logins = [];
  logouts = [];
  img:String;
  
  constructor(private navCtrl: NavController,private http: Http,private params:NavParams) {
    this.username = params.data.user;
    var link = "https://webservice-jhonny9550.c9users.io/getUserDates";
    var Data = JSON.stringify({user: this.username});
    this.http.post(link,Data).subscribe(data => {
        console.log(data.json());
        if (data.json().success) {
          this.registerDate = data.json().registerDate;
          this.logins = data.json().logInDates;
          this.logouts = data.json().logOutDates;
          this.img = data.json().img;
        }
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  logOut(){
    this.currentDate = new Date();
    var link = "https://webservice-jhonny9550.c9users.io/logout";
    var DataLogOut = JSON.stringify({user: this.username,logOutDate:this.currentDate});
    this.http.post(link,DataLogOut).subscribe(data => {
        console.log(data.json());
        if (data.json().success) {
          this.navCtrl.setRoot(LoginPage);
        }
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

}

