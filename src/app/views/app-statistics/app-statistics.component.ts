import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-app-statistics',
  templateUrl: './app-statistics.component.html',
  styleUrls: ['./app-statistics.component.css']
})
export class AppStatisticsComponent implements OnInit {

  data: any;

  constructor(private router: Router) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }

  ngOnInit(): void {
    this.checkLoginToken();
  }



  private checkLoginToken(): void {
    if (localStorage.getItem('token')) {
      console.log("Token available");
      return;
    } else {
      this.router.navigate(['/welcome']);
    }
  }
}
