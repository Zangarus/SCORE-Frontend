import { Component, OnInit } from '@angular/core';
import { IEntry, TravelType } from 'src/app/entity/Entry';
import { IUser } from 'src/app/entity/User';
import { ApiService } from 'src/app/service/http.service';

interface Vehicle {
  name: string,
  code: string
}

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})

export class AppHomeComponent implements OnInit {

  user: IUser = {} as IUser;
  valueChallenge: number = 10
  valueChallengeFriend: number = 30

  vehicles: Vehicle[];
  selectedVehicle: string = '';

  displayModal: boolean = false;
  kilometers: number = 0

  showModalDialog() {
    this.displayModal = true;
  }

  commandExecModal(): void {
    //TODO correctly handle enum
    this.apiService.addEntry({ distance: this.kilometers, travelType: (<any>TravelType)[this.selectedVehicle] } as IEntry)
      .subscribe();
    console.log(this.kilometers);
    console.log(this.selectedVehicle);
    //TODO update User Score in subscribe method
    this.displayModal = false;
  }

  constructor(private apiService: ApiService) {
    this.vehicles = [
      { name: 'FOOT', code: 'foot' },
      { name: 'CAR', code: 'car' },
      { name: 'PLANE', code: 'plane' }
    ];
    const username = localStorage.getItem('username')
    if (username) {
      this.apiService.findUser(username).subscribe(
        data => this.user = data
      )
    } else {
      //TODO redirect to login
    }
  }

  ngOnInit(): void {
  }

}
