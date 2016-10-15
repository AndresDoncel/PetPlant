import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { RegistroPlantaPage } from '../registro-planta/registro-planta';
import { Http } from '@angular/http';
import { Camera } from 'ionic-native';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the RegistroPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/registro/registro.html',
})
export class RegistroPage {

  currentDate: Date;

  constructor(private navCtrl: NavController, public loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  onRegisterUsuario(username, password, email, gender, direccion) {
    var link = "https://webservice-jhonny9550.c9users.io/createUser";
    var registerData = {
      "data": {
        "username": username,
        "password": password,
        "email": email,
        "gender": gender,
        "direccion": direccion
      }
    };
    console.log(registerData)
    //var registerData = JSON.stringify({username: username,password: password,email:email,gender:gender,city:city});
    this.http.post(link, registerData).subscribe(data => {
      console.log(data.json());
      if (data.json().success) {
        this.navCtrl.push(RegistroPlantaPage, {user:username});
        this.ToastRegister();
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


  ToastRegister() {
    let toast = this.toastCtrl.create({
      message: 'Registro Exitoso',
      duration: 3000
    });
    toast.present();
  }

}
