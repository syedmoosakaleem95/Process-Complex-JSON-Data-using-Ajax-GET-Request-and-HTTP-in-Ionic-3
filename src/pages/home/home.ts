import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private afauth:AngularFireAuth) {
  }

// https://randomuser.me/api/?results=10

users:any;

loadJson() {
this.http.get('https://randomuser.me/api/?results=10')
.map(res => res.json())
.subscribe(res => {
  this.users = res.results;
}, (err) => {
  alert("failed loading json data");
});
}

}
