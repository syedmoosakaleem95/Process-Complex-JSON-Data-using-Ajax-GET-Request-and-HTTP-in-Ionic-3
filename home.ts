import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
// import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
// import { FirebaseListObservable } from 'angularfire2/database';
// import {Http, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  facebook = {
    loggedIn : false,
    name : '',
    email : '',
    profilePicture: ''
  };

  // contactsList:FirebaseListObservable<any[]>;
  // Contact = '';
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public actionctrl:ActionSheetController,
     private afauth:AngularFireAuth) {
    //this.contactsList = this.firebaseService.getContactsList();
  }


loginwithfb() {
 this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
.then(res => {
  this.facebook.loggedIn = true;
  this.facebook.email = res.user.email;
  this.facebook.name = res.user.displayName,
  this.facebook.profilePicture = res.user.photoURL
})
}

logoutwithfb() {
  this.facebook.loggedIn = false;
this.afauth.auth.signOut();
}







  // addContact() {
  //   this.firebaseService.addContact(this.Contact);
  // }
  
  // deleteContact(id) {
  //   this.firebaseService.deleteContact(id);
  // }
// https://randomuser.me/api/?results=10

// users:any;

// loadJson() {
// this.http.get('https://randomuser.me/api/?results=10')
// .map(res => res.json())
// .subscribe(res => {
//   this.users = res.results;
// }, (err) => {
//   alert("failed loading json data");
// });
// }


  // showactionsheet() {
  //   let actionsheet = this.actionctrl.create( {
  //     title: 'My favorite list',
  //     buttons : [
  //       {
  //         text:'Delete',
  //         role:'destructive',
  //         handler: () => {
  //           console.log("Hey deleted successfully")
  //         }
  //       },
  //       {
  //         text:'Share',
  //         handler: () => {
  //           console.log("Hey Shared successfully")
  //         }
  //       },
  //       {
  //         text:'Cancel',
  //         role:'cancel',
  //         handler: () => {
  //           console.log("Hey cancelled successfully")
  //         }
  //       }
  //     ]
  //   });

  //   actionsheet.present();
  // }

}
