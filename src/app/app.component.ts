import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Spring-Angular practice';

  topic:string = 'Basic Angular-Spring 01';
  author:any = {
    firstName: 'Hugo',
    lastName: 'Vargas'
  };
}
