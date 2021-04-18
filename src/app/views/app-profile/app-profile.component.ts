import { Component, OnInit } from '@angular/core';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.css'],
  providers: [MessageService]
})
export class AppProfileComponent implements OnInit {

  value: number = 0;

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit() {

    this.checkLoginToken();

      this.value = 77;
      if (this.value >= 100) {
        this.value = 100;
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
      }

  }

  private checkLoginToken(): void {
    if (localStorage.getItem('token')) {
      return;
    } else {
      this.router.navigate(['/welcome']);
    }
  }

}

