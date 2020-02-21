import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersList().subscribe(
      data => console.log(data)
    );
  }

}
