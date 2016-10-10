import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import {DashboardadminPage} from '../dashboardadmin/dashboardadmin';
import {Http} from '@angular/http';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/info/info.html',
})
export class info {


  constructor(private navCtrl: NavController,public loadingCtrl: LoadingController) {

    this.presentLoading();

  }


  onHome() {

    this.navCtrl.setRoot(LoginPage);

  }

  slides = [
    {
      title: "Bienvenido a PetPlant",
      description: "Ahora podras darte cuenta de las necesidades de tu planta con solo un par de pasos.",
      image: "img/slide1.png",
      icon1: 'radio-button-on',
      icon2: 'radio-button-off',
      icon3: 'radio-button-off'

    },
    {
      title: "Como funciona PetPlant?",
      description: "<b>Muy Facil</b> Simplemente sincroniza el bluetooth de tu telefono movil con el dispostivo adquirido.",
      image: "img/slide2.png",
      icon1: 'radio-button-off',
      icon2: 'radio-button-on',
      icon3: 'radio-button-off'
    },
    {
      title: "Que tipo de planta tienes?",
      description: "<b>Escoge</b> el tipo de planta que vas a tener en tu cuidado.",
      image: "img/slide3.png",
      icon1: 'radio-button-off',
      icon2: 'radio-button-off',
      icon3: 'radio-button-on'
    }
  ];

 presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Espere un momento",
      duration: 5000
    });
    loader.present();
  }
 

}

