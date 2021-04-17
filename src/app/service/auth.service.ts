import { Injectable } from '@angular/core';
import { IUser } from '../entity/User';
import { ApiService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
  }

  register(user: IUser) {
    this.apiService.register(user).subscribe(
      resp => this.setSession
    )
  }

  login(user: IUser) {
    this.apiService.login(user).subscribe(
      resp => this.setSession
    )
  }

  logout() {
    localStorage.removeItem("token")
  }
}
