import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private authService: AuthService) { }

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
    } as IUser);
    this.displayLogin = false;
  }

  commandAbortLogin(): void {
    this.resetFields();
    this.displayLogin = false;
  }

  commandExecRegister(): void {
    this.authService.register({
      username: this.username,
      firstName: this.firstname,
      lastName: this.lastname,
      password: this.password,
    } as IUser);
    this.displayRegister = false;
  }

  commandAbortRegister(): void {
    this.resetFields();
    this.displayRegister = false;
  }

  private resetFields(): void {
    this.firstname = '';
    this.lastname = '';
    this.username = '';
    this.password = '';
  }
}
