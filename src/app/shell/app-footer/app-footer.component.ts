import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }


  public loggedIn :boolean = false;


  ngOnInit() {
    this.checkLoginToken();
    this.authService.onLogin.subscribe(() => this.loggedIn = true);
    this.authService.onLogout.subscribe(() => this.loggedIn = false);
  }



  logout(): void {
    this.authService.logout();
  }

  private checkLoginToken(): void {
    this.loggedIn = localStorage.getItem('token') !== null;
  }
}
