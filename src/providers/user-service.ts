import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirebaseListObservable,FirebaseObjectObservable,AngularFire} from 'angularfire2';



@Injectable()
export class UserService {
  users: FirebaseListObservable<any>;
  user:FirebaseObjectObservable<any>;

  constructor(public http: Http,public af:AngularFire) {
    console.log('Hello UserService Provider');
  }

  getUsers(){
    this.users=this.af.database.list('users/');
    return this.users;

  }

  getUser(id){
    this.user=this.af.database.object('/users/+id')
    return this.user;
  }

  addUser(user){
    return this.users.push(user);
  }

}
