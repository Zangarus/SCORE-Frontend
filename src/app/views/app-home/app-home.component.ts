import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService) {
    this.vehicles = [
      { name: 'Auto', code: 'aut' },
      { name: 'Fahrrad', code: 'fahr' }
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
    if (this.user.entries) {
      this.kilometers = this.user.entries.reduce((sum, current) => sum + current.distance, 0);
    }
  }

}
