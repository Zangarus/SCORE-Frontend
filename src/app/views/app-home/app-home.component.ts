import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IEntry, TravelType } from 'src/app/entity/Entry';
import { IUser } from 'src/app/entity/User';
import { ApiService } from 'src/app/service/http.service';

interface Vehicle {
  name: string;
  code: string;
}

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
})
export class AppHomeComponent implements OnInit {
  score: number = 40;
  valueChallenge: number = 10;
  valueChallengeFriend: number = 30;
  user: IUser = {} as IUser;


  vehicles: Vehicle[] = [];
  selectedVehicle: string = '';

  displayModal: boolean = false;
  kilometers: number = 0;

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

  constructor(private router: Router, private apiService: ApiService) {

    const username = localStorage.getItem('username')
    if (username) {

    } else {
      //TODO redirect to login
    }
  }

  ngOnInit(): void {
    this.checkLoginToken();

    this.vehicles = [
      { name: 'FOOT', code: 'foot' },
      { name: 'CAR', code: 'car' },
      { name: 'PLANE', code: 'plane' }
    ];
  }

  private checkLoginToken(): void {
    const username = localStorage.getItem('username');
    if (username === null) {
      this.router.navigate(['/welcome']);
    }
    else
    {
      this.apiService.findUser(username).subscribe(
        data => this.user = data
      )
    }
  }
}
