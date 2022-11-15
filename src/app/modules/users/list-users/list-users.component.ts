import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.searchAllUsers().subscribe(
      (data:User[]) =>{
        this.users = data;
      }
    )
  }
}
