import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//imports-module
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//declarations-components
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';

//providers-services
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostFormComponent } from './components/post-form/post-form.component';



@NgModule({
  declarations: [AppComponent, UserComponent, UsersComponent, NavbarComponent, PostsComponent, PostFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }