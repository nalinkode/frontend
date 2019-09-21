import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  template: '<app-header></app-header> <router-outlet></router-outlet> <app-footer></app-footer>',
})

export class AppComponent {

  userModel = new User('Nalin', 'nalinkode35@gmail.com', 8237416310, '');














}

