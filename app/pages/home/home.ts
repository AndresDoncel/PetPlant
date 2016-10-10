import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

//this.navCtrl.setRoot();
  }


  onLogin(){

    this.navCtrl.push(LoginPage);

  }

  onRegister(){

    this.navCtrl.push(RegistroPage);

  }
  

}
