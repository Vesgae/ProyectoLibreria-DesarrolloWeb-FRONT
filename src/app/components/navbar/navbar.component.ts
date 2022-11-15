import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapse = false;   // guardamos el valor
  loginBt = this.authService.isAuthenticated();
  logOutBt = !this.authService.isAuthenticated();

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  toggleState() {
    let verifyCollapse = this.isCollapse;
    this.isCollapse = !verifyCollapse;
  }
  logOut(){
    this.authService.deleteToken();
  }
}
