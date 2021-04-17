import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/entity/User';
import { ApiService } from 'src/app/service/http.service';

@Component({
  selector: 'app-app-ranking',
  templateUrl: './app-ranking.component.html',
  styleUrls: ['./app-ranking.component.css']
})
export class AppRankingComponent implements OnInit {

  constructor(private apiService: ApiService) { }

public users: IUser[] = []

  ngOnInit(): void {
    this.users = [
      { firstName: 'Andreas', lastName: 'Stutz', score: 143 },
      { firstName: 'Michelle', lastName: 'Blumenstein', score: 248 },
      { firstName: 'Simon', lastName: 'Rochlin', score: -358 },
      { firstName: 'Melanie', lastName: 'Wassmer', score: 23 },
      { firstName: 'Marwin', lastName: 'Madsen', score: 415 },
    ]
  }



}
