import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    user: {
        name: string,
        surname: string,
        age: number,
        school: {
            schoolName: string,
            schoolNote: number,
            teacher: string
        },
        isActive: boolean,
        date: any,
        hide: boolean
    }[];
    loaded: boolean = true;
    style = {};
    defaultStyle = {};

    constructor() {

    }

    ngOnInit() {
        console.log('Hello');

        this.user = [
            {
                name: 'ionel',
                surname: 'purcel',
                age: 19,
                school: {
                    schoolName: 'numarul 32',
                    schoolNote: 1,
                    teacher: 'ioana'
                },
                isActive: true,
                date: new Date('01/01/1921 08:30:00'),
                hide: true
            },
            {
                name: 'john',
                surname: 'johnel',
                age: 11,
                school: {
                    schoolName: 'numarul 22',
                    schoolNote: 4,
                    teacher: 'johnyka'
                },
                isActive: false,
                date: new Date('11/21/2020 18:30:00'),
                hide: true
            },
            {
                name: 'ionut',
                surname: 'ionut',
                age: 32,
                school: {
                    schoolName: 'numarul 69',
                    schoolNote: 8,
                    teacher: 'nicoleta'
                },
                isActive: true,
                date: new Date('08/10/1954 22:30:00'),
                hide: true
            }
        ];

        this.style = {
            'font-weight': 500
        }

        this.defaultStyle = {
            'color': 'yellow'
        }
    }

    onSubmitAction(e) {
        e.preventDefault();
        console.log(e.target['name'].value);
    }
}