import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService }  from '../shared/index';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [User]
})
export class RegisterComponent implements OnInit {
  model:any = {};
  gender = ['Male', 'Female'];

  constructor(private toastr: ToastrService,private router:Router,public user: User,private userService: UserService) {

  }
  ngOnInit() {
  }

  register() {
    console.log(this.user);
     this.user.role="User"
     this.userService.register(this.user).subscribe(data => {
       alert(data);
       this.showSuccess();
      
       console.log("its working");
  })
}

  showSuccess() {
    debugger
    this.toastr.success('sign Up successfully' );
    debugger
  }



  gotosignin()
  {
    this.router.navigate(['login'])
  }
   
}






