import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  loadedProducts: boolean = false;
  enableAdd: boolean = true;
  //currentClasses = {};
  //currentStyles = {};


  products: {
    mainProduct: string,
    secondProduct: string,
    priceMainProduct: number,
    priceSecondProduct: number,
    totalPrice: number,
    isCorect: boolean
  }[]

  constructor() {

  }

  ngOnInit(): void {

    this.users = [
      {
        firstname: 'Vassile',
        lastname: 'Ion',
        age: 52,
        address: {
          street: 'ionescu de la vrancea',
          city: 'Stockholm',
          state: 'Raspanpuran'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstname: 'Kevin',
        lastname: 'John',
        age: 22,
        address: {
          street: 'Barbu de la ionesti',
          city: 'los angeles',
          state: 'usa'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00')
      },
      {
        firstname: 'john',
        lastname: 'Ion',
        age: 82,
        address: {
          street: 'patapievici',
          city: 'new york',
          state: 'bosnia'
        },
        isActive: true,
        registered: new Date('11/02/2016 02:30:00')
      }
    ];

    this.loaded = true;

    console.log('UsersComponent init');

    setTimeout(() => {
      this.products = [
        {
          mainProduct: 'paine',
          secondProduct: 'cartofi',
          priceMainProduct: 1,
          priceSecondProduct: 2,
          totalPrice: 3,
          isCorect: true
        },
        {
          mainProduct: 'paine feliata',
          secondProduct: 'cartofi uscati',
          priceMainProduct: 2,
          priceSecondProduct: 3,
          totalPrice: 5,
          isCorect: false
        },
        {
          mainProduct: 'paine feliata neagra',
          secondProduct: 'cartofi prajiti',
          priceMainProduct: 3,
          priceSecondProduct: 4,
          totalPrice: 7,
          isCorect: true
        }
      ];

      this.loadedProducts = true;
    }, 3000);

    //this.setCurrentClasses();
    //this.setCurrentStyles();

    this.addProduct({
      mainProduct: 'paine seminte',
      secondProduct: 'cartofi KFC',
      priceMainProduct: 7,
      priceSecondProduct: 6,
      totalPrice: 13,
      isCorect: false
    })


  }

  addUser(user) {
    this.users.push(user);
  }

  addProduct(product) {
    this.products.push(product);
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