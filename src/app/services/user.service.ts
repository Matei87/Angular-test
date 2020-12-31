import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() {

    this.users = [
      {
        firstName: 'Vassile',
        lastName: 'Ion',
        email: 'vassile@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'John',
        email: 'Kevin@yahoo.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'john',
        lastName: 'Ion',
        email: 'john.ion@respectaMan.com',
        isActive: true,
        registered: new Date('11/02/2016 02:30:00'),
        hide: true
      }
    ];

  }

  getData() { }

  getUsers(): Observable<User[]> {
    console.log("DATA SERVICE");
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
