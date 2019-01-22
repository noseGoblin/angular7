import { Component, OnInit } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  toggle: boolean = false;
  log: array = [];
  // textDisplay: string = 'block';
  // textHide: string = 'none';


  constructor() { }

  ngOnInit() {
  }

  onToggleStatus() {
    this.toggle = !this.toggle;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
