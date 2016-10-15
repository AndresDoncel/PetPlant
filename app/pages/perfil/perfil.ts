import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/perfil/perfil.html',
})
export class PerfilPage {

  object;
  img;

  constructor(private navCtrl: NavController, private http: Http, private params: NavParams) {
    this.object = this.params.data;
    console.log(this.params.data);
    var link = "https://webservice-jhonny9550.c9users.io/getUserDates";
    var Data = JSON.stringify({ user: this.object.username });
    this.http.post(link, Data).subscribe(data => {
      console.log(data.json());
      if (data.json().success) {
        console.log(data.json().img);
        this.img = data.json().img;
      }
    }, error => {
      console.log(JSON.stringify(error.json()));
    });

  }





}
