import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  auth: AuthService;
  constructor(auth: AuthService, private router: Router) {
    this.email = ""
    this.password = ""
    this.auth = auth;
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  ngOnInit(): void {
    if(this.auth.isAuthenticated()) {
      this.router.navigate(['']);
    }
  }

  signIn():void{
    this.auth.signIn(this.email, this.password);
    this.openPopup();
  }

}
