import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/entity/User';
import { ApiService } from 'src/app/service/http.service';

@Component({
  selector: 'app-app-welcome',
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.css']
})
export class AppWelcomeComponent implements OnInit {

  public displayLogin: boolean = false;
  public displayRegister: boolean = false;

  public username: string = '';
  public password: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

selectLogin(): void {
  this.displayLogin = true;
}

selectRegister(): void {
  this.displayRegister = true;
}

commandExecLogin(): void {
  this.displayLogin = true;
  this.apiService.login({
    username: this.username,
    password: this.password,
  } as IUser).subscribe();
}

commandAbortLogin(): void {
  this.username = '';
  this.password = '';
  this.displayLogin = false;
}

}
