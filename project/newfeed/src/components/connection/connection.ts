import { Component } from '@angular/core';

/*
  Generated class for the Connection component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'connection',
  templateUrl: 'connection.html'
})
export class ConnectionComponent {

  text: string;

  constructor() {
    console.log('Hello Connection Component');
    this.text = 'Hello World';
  }

}
