import { Component } from '@angular/core';
import { EventBrokerService } from 'ng-event-broker';
import { Events } from './events/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SCORE-Frontend';

  constructor(private eventService: EventBrokerService){

  }


  ngOnInit() {
    this.registerAppEvents();
  }

  private registerAppEvents() {
    this.eventService.registerEvent(Events.login);
    this.eventService.registerEvent(Events.logout);

  }

}
