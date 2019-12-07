import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  listTech:string[] = ['C', 'Python', 'Java', 'Javascript', 'SQL'];

  enable:boolean = true;

  setEnable(): void {
    this.enable = (this.enable == true) ? false : true;
  }
}
