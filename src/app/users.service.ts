import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({providedIn:'root'})

export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    count = 0;

    constructor(private loggerService:LoggerService){

    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        ++this.count;

        this.loggerService.getLogs(this.count);
      }
    
    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        ++this.count;

        this.loggerService.getLogs(this.count);
      }

      userSetToInactive = new EventEmitter<number>();
      userSetToActive = new EventEmitter<number>();
}