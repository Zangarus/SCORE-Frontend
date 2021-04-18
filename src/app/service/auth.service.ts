import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../entity/User';
import { ApiService } from './http.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public onLogin: EventEmitter<void> = new EventEmitter<void>();
  public onLogout: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService
  ) {}

  private setSession(token: string) {
    localStorage.setItem('token', token);
  }

  register(user: IUser): Observable<any> {
    return this.apiService.register(user).pipe(
      tap((resp: any) => {
        this.setUserNameIfAvail(user);
        this.setSession(resp.token);
      }),
      tap(data => this.onLogin.emit()),
      tap(data => this.messageService.add({severity:'info', summary:'Registrierung', detail:'Registrierung gesendet!'}))
    );
  }

  login(user: IUser): Observable<any> {
    return this.apiService.login(user).pipe(
      tap((resp) => {
        this.setUserNameIfAvail(user);
        this.setSession(resp.token);
      }),
      tap((data) => this.onLogin.emit()),
      tap(data => this.messageService.add({severity:'info', summary:'Anmeldung', detail:'Anmeldung gesendet!'}))
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userrname');
    this.onLogout.emit()
    this.router.navigate(['/welcome']);
    this.messageService.add({severity:'info', summary:'Abmeldung', detail:'Abmeldung gesendet!'})
  }

  private setUserNameIfAvail(user: IUser): void {
    if (user.username) {
      localStorage.setItem('username', user.username);
    }
  }

}
