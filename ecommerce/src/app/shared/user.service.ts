import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { User } from './user.model';
 
@Injectable()
export class UserService {
  readonly rootUrl = "http://localhost:8080";

  constructor(public http : HttpClient) { }

  register(user) : Observable<any> {
  return this.http.post<any>(this.rootUrl + '/user/register', user);
  };

  login(user):Observable<any> {  
      return this.http.post<any>(this.rootUrl + '/login',user);
  };
  
  getUserlist(User):Observable<any>{ 
      return this.http.get<any>(this.rootUrl + '/user/list',User);
   };
  
}
