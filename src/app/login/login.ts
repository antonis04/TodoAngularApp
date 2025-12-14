import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = "Antek"
  password = "123"
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  handleLogin(){
    // console.log(this.username);
    if(this.username === "Antek" && this.password === "123") {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
