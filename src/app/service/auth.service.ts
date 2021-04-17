import { Injectable } from '@angular/core';
import { IUser } from '../entity/User';
import { ApiService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  private setSession(token: string) {
    localStorage.setItem('token', token);
  }

  register(user: IUser) {
    this.apiService.register(user).subscribe(
      (resp: any) => this.setSession(resp.token)
    )
  }

  login(user: IUser) {
    this.apiService.login(user).subscribe(
      (resp: any) => this.setSession(resp.token)
    )
  }

  logout() {
    localStorage.removeItem("token")
  }
}
