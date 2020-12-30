import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  loadedProducts: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;


  constructor() {

  }

  ngOnInit(): void {

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

    this.loaded = true;

    console.log('UsersComponent init');

  }


  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('form is not valid');

    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);
      this.form.reset();
    }
  }
  // addProduct(product) {
  //   this.products.push(product);
  // }

  fireEvent(e) {
    //console.log('button clicked');
    console.log(e.type);
    console.log(e.target.value);
  }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     'btn-success': true,
  //     'big-text': true,
  //   }
  // }

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px'
  //   }
  // };

}