import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public http: Http, public angularfiredb: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getContactsList() {
    return this.angularfiredb.list('/contactsList/');
  }

  addContact(name) {
    this.angularfiredb.list('/contactsList').push(name);
  }

  deleteContact(id) {
    this.angularfiredb.list('/contactsList').remove(id);
  }
}
