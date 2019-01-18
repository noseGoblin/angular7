import { Component, OnInit } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  textDisplay: string = 'block';
  textHide: string = 'none';
  toggle: boolean = true;
  logClick: number = 0;


  constructor() { }

  ngOnInit() {
  }

  toggleStatus() {
    this.toggle = !this.toggle;
    this.logClick++;
    return this.logClick;
  }

  getToggleStatus() {
    if(this.toggle){
      return this.textHide;
    } else{
      return this.textDisplay;
    }
  }
}
