import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  vehicles: Vehicle[];
  selectedVehicle: string = '';

  displayModal: boolean = false;
  kilometers: number = 0;

  showModalDialog() {
    this.displayModal = true;
  }

  constructor(private router: Router) {
    this.vehicles = [
      { name: 'Auto', code: 'aut' },
      { name: 'Fahrrad', code: 'fahr' },
    ];
  }

  ngOnInit(): void {
    this.checkLoginToken();
  }

  private checkLoginToken(): void {
    const token = localStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/welcome']);
    }
  }
}
