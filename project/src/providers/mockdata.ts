//this is the mock data to test

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ReplaySubject} from 'rxjs';

@Injectable()
export class Data {


    techevents: ReplaySubject<{}> = new ReplaySubject<{}>();

    constructor(public http:Http){
        console.log('Heelo this is mock data provider');
    }

    //getTechEvents
    getTechEvents(){
        return this.techevents;
    }
    //addTechEvents
    addTechEvents(t){
        this.techevents.next(t);
    }

}