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

  constructor() { }

  ngOnInit() {
  }

  toggleStatus() {
    this.toggle != this.toggle;
  }

  let getToggleStatus = this.toggle (this.toggle ? this.textHide : this.textDisplay );
}
