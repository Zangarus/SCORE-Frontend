import { Component, OnInit } from '@angular/core';

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

  score : number = 40
  valueChallenge : number = 10
  valueChallengeFriend : number =30

  vehicles : Vehicle[];
  selectedVehicle : string ='';

  constructor() {

    this.vehicles = [
      {name: 'Auto', code: 'aut'},
      {name: 'Fahrrad', code: 'fahr'}
  ];


  }

  ngOnInit(): void {

  }

}
