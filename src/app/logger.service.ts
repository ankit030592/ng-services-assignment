import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class LoggerService{
    getLogs(logIndex:number){
        console.log('log index is '+logIndex);
    }
}