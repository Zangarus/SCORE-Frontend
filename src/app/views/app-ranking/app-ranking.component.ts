import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/entity/User';
import { ApiService } from 'src/app/service/http.service';

@Component({
  selector: 'app-app-ranking',
  templateUrl: './app-ranking.component.html',
  styleUrls: ['./app-ranking.component.css'],
})
export class AppRankingComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  public users: IUser[] = [];

  ngOnInit(): void {
    this.checkLoginToken();
    this.loadServerData();
  }

  private loadMockData(): void {
    this.users = [
      { firstName: 'Andreas', lastName: 'Stutz', score: 143 },
      { firstName: 'Michelle', lastName: 'Blumenstein', score: 248 },
      { firstName: 'Simon', lastName: 'Rochlin', score: -358 },
      { firstName: 'Melanie', lastName: 'Wassmer', score: 23 },
      { firstName: 'Marwin', lastName: 'Madsen', score: 415 },
      { firstName: 'Andreas', lastName: 'Stutz', score: 143 },
      { firstName: 'Michelle', lastName: 'Blumenstein', score: 248 },
      { firstName: 'Simon', lastName: 'Rochlin', score: -358 },
      { firstName: 'Melanie', lastName: 'Wassmer', score: 23 },
      { firstName: 'Marwin', lastName: 'Madsen', score: 415 },
      { firstName: 'Andreas', lastName: 'Stutz', score: 143 },
      { firstName: 'Michelle', lastName: 'Blumenstein', score: 248 },
      { firstName: 'Simon', lastName: 'Rochlin', score: -358 },
      { firstName: 'Melanie', lastName: 'Wassmer', score: 23 },
      { firstName: 'Marwin', lastName: 'Madsen', score: 415 },
      { firstName: 'Andreas', lastName: 'Stutz', score: 143 },
      { firstName: 'Michelle', lastName: 'Blumenstein', score: 248 },
      { firstName: 'Simon', lastName: 'Rochlin', score: -358 },
      { firstName: 'Melanie', lastName: 'Wassmer', score: 23 },
      { firstName: 'Marwin', lastName: 'Madsen', score: 415 },
      { firstName: 'Andreas', lastName: 'Stutz', score: 143 },
      { firstName: 'Michelle', lastName: 'Blumenstein', score: 248 },
      { firstName: 'Simon', lastName: 'Rochlin', score: -358 },
      { firstName: 'Melanie', lastName: 'Wassmer', score: 23 },
      { firstName: 'Marwin', lastName: 'Madsen', score: 415 },
    ];
  }

  private loadServerData(): void {
    this.apiService
      .findUsers()
      .toPromise()
      .then((item) => (this.users = item))
      .catch((err) => this.handleError(err));
  }

  private handleError(err: any): any {
    console.log(err);
  }


  private checkLoginToken(): void {
    if (localStorage.getItem('token')) {
      return;
    } else {
      this.router.navigate(['/welcome']);
    }
  }
}
