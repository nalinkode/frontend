import { Component, OnInit } from '@angular/core';
import {  UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [User]
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private toastr: ToastrService,private router: Router, public user: User, private loginService:  UserService) { }

  ngOnInit() {
  }
  
  public logindata = <any>{}
  
  login() {
      console.log("working");
      this.loginService.login(this.user).subscribe(data => {
      this.logindata=data;
      console.log("loginUser:",this.logindata);
      
      if(this.logindata.role == 'User'){
        this.showSuccess(); 
        this.router.navigate(['']);
      }
          
      else if(this.logindata.role == 'admin'){ 
        this.showSuccess();
        this.router.navigate(['productlist'])
      }
        
      });
}

showSuccess() {
      this.toastr.success('Sign In successfully' );
}

 gotoRegister() {
    this.router.navigate(['register'])
}

gotoforgotpassword(){
    this.router.navigate(['forgotpassword'])
}

}
