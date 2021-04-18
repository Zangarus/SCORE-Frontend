import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs/operators';
import { IEntry, Vehicle, TravelType } from 'src/app/entity/Entry';
import { IUser } from 'src/app/entity/User';
import { ApiService } from 'src/app/service/http.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
  providers: [MessageService]
})
export class AppHomeComponent implements OnInit {
  user: IUser = {} as IUser;
  vehicles: Vehicle[] = [];

  displayModal: boolean = false;
  kilometers: number = 0;
  selectedVehicle: TravelType = 0;

  score: number = 40;
  valueChallenge: number = 10;
  valueChallengeFriend: number = 30;

  constructor(private router: Router, private messageService: MessageService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.checkLoginToken();
    this.vehicles = this.loadTravelTypes();
  }

  showEntryDialog() {
    this.resetDialogFields();
    this.displayModal = true;
  }

  commandAccept(): void {
    //TODO correctly handle enum
    this.apiService
      .addEntry({
        username: this.user.username,
        distance: this.kilometers,
        travelType: this.selectedVehicle,
        timestamp: new Date()
      } as IEntry)
      .pipe(
        tap((user:IUser) => this.user = user),
        tap((user:IUser) => this.messageService.add({severity:'info', summary:'New Score', detail:'Your new Score is: ' + user.score?.absScore}))
      );

  }

  commandAbort(): void {
    this.resetDialogFields();
  }

  resetDialogFields(): void {
    this.displayModal = false;
    this.kilometers = 0;
    this.selectedVehicle = 0;
  }

  private loadTravelTypes(): Vehicle[] {
    return [
      { code: TravelType.Foot, name: 'Zu Fuß' },
      { code: TravelType.Bike, name: 'Fahrrad' },
      { code: TravelType.eBike, name: 'Elektro-Fahrrad' },
      { code: TravelType.Car, name: 'Auto / Taxi' },
      { code: TravelType.eCar, name: 'Elektro-Auto / Taxi' },
      { code: TravelType.Plane, name: 'Flugzeug' },
      { code: TravelType.LocalTrain, name: 'Nahverkehr (Linien-Bus, S-Bahn)' },
      { code: TravelType.LongTrain, name: 'Fernverkehr (Fernbus, Zug)' },
    ];
  }

  private checkLoginToken(): void {
    const username = localStorage.getItem('username');
    if (username === null) {
      this.router.navigate(['/welcome']);
    } else {
      this.updateUserData(username);
    }
  }

  private updateUserData(username: string): void {
    this.apiService.findUser(username).subscribe((data) => (this.user = data));
  }
}
