import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { RegistroPage } from '../registro/registro';
import { DashboardadminPage } from '../dashboardadmin/dashboardadmin';
import { Http } from '@angular/http';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  currentDate: Date;

  constructor(private navCtrl: NavController, private http: Http, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  onLogin(user, pass) {
    this.currentDate = new Date();
    var link = "https://webservice-jhonny9550.c9users.io/login";
    var loginData = JSON.stringify({ user: user, pass: pass, logInDate: this.currentDate });
    this.http.post(link, loginData).subscribe(data => {
      console.log(loginData);
      if (data.json().success) {
        this.navCtrl.setRoot(DashboardPage, { user: user });
      } else {
        let alert = this.alertCtrl.create({
          title: 'Fallo al ingresar',
          subTitle: 'Usuario o contraseña incorrectos',
          buttons: ['OK']
        });
        alert.present();
      }

    }, error => {
      console.log(JSON.stringify(error.json()));
      let alert = this.alertCtrl.create({
        title: 'Fallo al ingresar',
        subTitle: 'Tiempo de espera agotado',
        buttons: ['OK']
      });
      alert.present();
      //this.navCtrl.setRoot(DashboardPage);
    });

  }

  onRegistro() {
    this.navCtrl.push(RegistroPage);
  }

  

}
