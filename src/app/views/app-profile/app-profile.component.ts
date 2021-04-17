import { Component, OnInit } from '@angular/core';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.css'],
  providers: [MessageService]
})
export class AppProfileComponent implements OnInit {

  value: number = 0;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    let interval = setInterval(() => {
      this.value = 77;
      if (this.value >= 100) {
        this.value = 100;
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
        clearInterval(interval);
      }
    }, 2000);
  }

}

