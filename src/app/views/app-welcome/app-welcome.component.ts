import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/entity/User';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-app-welcome',
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.css']
})
export class AppWelcomeComponent implements OnInit {

  public displayLogin: boolean = false;
  public displayRegister: boolean = false;

  public firstname: string = '';
  public lastname: string = '';
  public username: string = '';
  public password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  selectLogin(): void {
    this.displayLogin = true;
  }

  selectRegister(): void {
    this.displayRegister = true;
  }

  commandExecLogin(): void {
    this.authService.login({
      username: this.username,
      password: this.password,
    } as IUser).subscribe(data => this.router.navigate(['/home']))
    this.resetFields()
  }

  commandAbortLogin(): void {
    this.resetFields();
  }

  commandExecRegister(): void {
    this.authService.register({
      username: this.username,
      firstName: this.firstname,
      lastName: this.lastname,
      password: this.password,
    } as IUser).subscribe(data => this.router.navigate(['/home']))
    this.resetFields()
  }

  commandAbortRegister(): void {
    this.resetFields();
  }

  private resetFields(): void {
    this.firstname = '';
    this.lastname = '';
    this.username = '';
    this.password = '';
    this.displayRegister = false;
    this.displayLogin = false;
  }
}
