import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
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
  data: any;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getData();

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
      this.loaded = true;
    });

    console.log(this.userService);

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

      this.userService.addUser(value);
      this.form.reset();
    }
  }
  // addProduct(product) {
  //   this.products.push(product);
  // }

  // fireEvent(e) {
  //   //console.log('button clicked');
  //   console.log(e.type);
  //   console.log(e.target.value);
  // }

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