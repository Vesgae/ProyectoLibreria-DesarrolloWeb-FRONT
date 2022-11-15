import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  searchAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8081/users");
  }

  //Inactivar Usuario


}
