import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera } from 'ionic-native';
import { DashboardPage } from '../dashboard/dashboard';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the RegistroPlantaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/registro-planta/registro-planta.html',
})
export class RegistroPlantaPage {

  public base64ImagePlanta: string;
  username;

  constructor(private params: NavParams, private navCtrl: NavController, public loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController, public toastCtrl: ToastController) {
  this.username= params.data.user;

}

onRegisterPlanta(namePlanta, tipo, genero) {
    var link = "https://webservice-jhonny9550.c9users.io/createPlanta";
    var registerData = {
      "data": {
        "nombrePlanta": namePlanta,
        "tipo": tipo,
        "genero": genero,
        "img": this.base64ImagePlanta,
        "username":this.username
      }
    };
    console.log(registerData)
    this.http.post(link, registerData).subscribe(data => {
      console.log(data.json());
      if (data.json().success) {
        this.navCtrl.setRoot(DashboardPage, {username:this.username, img:this.base64ImagePlanta});
      } else {
        let alert = this.alertCtrl.create({
          title: 'Fallo al registrar',
          subTitle: 'Faltan campos por completar',
          buttons: ['OK']
        });
        alert.present();
      }

    }, error => {
      console.log(JSON.stringify(error.json()));
      let alert = this.alertCtrl.create({
        title: 'Fallo al registrar',
        subTitle: 'Tiempo de espera agotado',
        buttons: ['OK']
      });
      alert.present();
      //this.navCtrl.setRoot(DashboardPage);
    });
  }


  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64ImagePlanta = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

}
