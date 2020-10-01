import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeUsers : string[] = [];
  inactiveUsers : string[] =[];

  constructor(private userService:UserService){

    this.userService.userSetToActive.subscribe((userId : number)=>{
      this.userService.onSetToActive(userId);
    })

    this.userService.userSetToInactive.subscribe((userId : number)=>{
    this.userService.onSetToInactive(userId);

    })
  }
}
