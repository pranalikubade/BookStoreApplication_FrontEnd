import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 

  constructor(private http:HttpClient) { }

  addUser(user:any):Observable<any>{
    return this.http.post('http://localhost:8090/user/register',user)

  }

  login(login:any): Observable<any>{
    return this.http.post('http://localhost:8090/user/login',login)
}
}
