import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { IUser } from '../entity/User';
import { IEntry } from '../entity/Entry';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private http: HttpClient) {
  }

  register(user: IUser) : Observable<any> {
    return this.http.post<any>(this.apiUrl + 'user/register', user, this.httpOptions);
  }

  login(user: IUser) : Observable<any>{
    console.log("login");
    return this.http.post<any>(this.apiUrl + 'user/login', user, this.httpOptions);
  }

  findUser(username: string) {
    return this.http.get<IUser>(this.apiUrl + 'user/' + username, this.httpOptions);
  }

  findUsers() {
    return this.http.get<IUser[]>(this.apiUrl + 'user/list', this.httpOptions);
  }

  getSummary(id: string) {
    return this.http.get(this.apiUrl + 'user/summary' + id, this.httpOptions);
  }

  addEntry(entry: IEntry) {
    return this.http.post(this.apiUrl + 'entry', entry, this.httpOptions);
  }
}

