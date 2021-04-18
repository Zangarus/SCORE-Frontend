import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventBrokerService } from 'ng-event-broker';
import { MenuItem } from 'primeng/api';
import { Events } from 'src/app/events/event.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private router: Router, private eventService: EventBrokerService, private authService: AuthService) {
  }


  public loggedIn :boolean = false;


  ngOnInit() {
    this.checkLoginToken();
    this.eventService.subscribeEvent(Events.login).subscribe(() => {
      this.loggedIn = true;
    })
    this.eventService.subscribeEvent(Events.logout).subscribe(() => {
      this.loggedIn = false;
    })
  }



  logout(): void {
    this.authService.logout();
  }

  private checkLoginToken(): void {
    this.loggedIn = localStorage.getItem('token') !== null;
  }
}
