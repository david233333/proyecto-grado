import { Injectable } from '@angular/core';
import { User } from '../../domain/models/user/entity/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  
  
  private _users: BehaviorSubject<User[]>;
  
  private dataStore: {
    users: User[]
  }

  constructor(private http: HttpClient) {
    
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.documentNumber = this.dataStore.users.length ;
      this.dataStore.users.push(user);
      this._users.next(Object.assign({}, this.dataStore).users);
      resolver(user);
    });
  }

  userById(id: number) {
    return this.dataStore.users.find(x => x.documentNumber == id);
  }

  loadAll() {
    const usersUrl = 'https://back-selfcareapp.herokuapp.com/selfcare/users';

    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
      
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      }, error => {
      });
  }

}
