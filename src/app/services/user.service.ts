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

  searchUser(email: string):Observable<User>{
    return this.http.get<User>("http://localhost:8081/users/"+email);
  }

  deleteUser(email: string):void{
    this.http.delete<User>("http://localhost:8081/users?email="+email);
  }

  updateUser(email: string, update_user: User):void{
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(update_user);
    this.http.put("http://localhost:8081/"+email, body, {'headers':headers});

  }

}
