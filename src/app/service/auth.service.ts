import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../entity/User';
import { ApiService } from './http.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventBrokerService } from 'ng-event-broker';
import { Events } from '../events/event.model';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private eventService: EventBrokerService,
    private apiService: ApiService
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
      tap((data) => this.eventService.publishEvent(Events.login))
    );
  }

  login(user: IUser): Observable<any> {
    return this.apiService.login(user).pipe(
      tap((resp) => {
        this.setUserNameIfAvail(user);
        this.setSession(resp.token);
      }),
      tap((data) => this.eventService.publishEvent(Events.login))
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userrname');
    this.eventService.publishEvent(Events.logout);
    this.router.navigate(['/welcome']);
  }

  private setUserNameIfAvail(user: IUser): void {
    if (user.username) {
      localStorage.setItem('username', user.username);
    }
  }
}
