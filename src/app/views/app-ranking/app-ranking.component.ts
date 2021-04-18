import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from 'src/app/entity/User';
import { ApiService } from 'src/app/service/http.service';

@Component({
  selector: 'app-app-ranking',
  templateUrl: './app-ranking.component.html',
  styleUrls: ['./app-ranking.component.css'],
  providers: [MessageService],
})
export class AppRankingComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService
  ) {}

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

  public loadServerData(): void {
    console.log('loadServerData');
    this.apiService
      .findUsers()
      .pipe(
        catchError((err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Loading Error',
            detail: 'Ranking Data could not be loaded!',
          });
          return [];
        })
      )
      .subscribe((data) => {
        this.users = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Loaded',
          detail: 'Ranking Data loaded!',
        });
      });
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
