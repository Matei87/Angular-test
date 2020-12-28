import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    // template: '<h1>Hello World !!!</h1>
    //     < p > {{ firstName }} {{ lastName }} is {{ age }} years old!!! < /p>',
    styleUrls: ['./user.component.css'],
    templateUrl: './user.component.html'
    // styles: [`
    // h1 {
    //     color: red;
    // }
    // `]
})

export class UserComponent {
    // Properties
    // firstName = 'John';
    // lastName = 'Doe';
    // age = 33;
    // address = {
    //     street: '50 Main Street',
    //     city: 'Boston',
    //     state: 'Masachusets'
    // };
    firstName: string; //TYPE: string
    lastName: string; //TYPE: string
    age: number; //TYPE: number
    address; //TYPE: not Defined
    foo: any; //TYPE: any
    hasKids: boolean;  //TYPE: boolean
    numberArray: number[]; //TYPE: array of numbers
    stringArray: string[]; //TYPE: array of strings
    mixedArray: any[]; //TYPE: array of numbers/booleans/strings -> any type
    myTuple: [number, string, boolean]; //TYPE: array with first index of number, second string, third boolean
    unusuable: void; //TYPE: undefined or null
    u: undefined; //TYPE: undefined
    n: null; //TYPE: null

    //Methods
    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 33;
        this.address = {
            street: '50 Main Street',
            city: 'Boston',
            state: 'Masachusets'
        };
        this.foo = true;
        this.hasKids = true;
        this.numberArray = [1, 2, 3];
        this.stringArray = ['Hello', 'World'];
        this.mixedArray = [false, 1, true, ' Hello'];
        this.myTuple = [1, 'hy', false];
        this.unusuable = null;
        this.u = undefined;
        this.n = null;

        console.log(this.addNumbers(1, 2));

        console.log('Hello user...');
        this.sayHello();
        console.log(this.age);
        this.hasBirthDay();
        console.log(this.age);
    }

    //function where the paramethers must be numbers and the return value must be number
    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }

    showAge() {
        return this.age;
    }
    sayHello() {
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthDay() {
        console.log(this.age += 1);
    }

}