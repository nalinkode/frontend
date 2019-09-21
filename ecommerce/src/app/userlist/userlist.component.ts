import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';
import { UserService }from '../shared/user.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [ User ]
})
export class UserlistComponent implements OnInit {

  constructor(private router: Router, public user:User,private getuserlist: UserService) { }

  ngOnInit() {
    this.getUserlist();
  }

  public userData = <any> {};

  getUserlist()
  {
    
    console.log("in getuserlist()")
    this.getuserlist.getUserlist(this.user).subscribe(data => {
      
      this.userData = data;

    });


  }
  



}
