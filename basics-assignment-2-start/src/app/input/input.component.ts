import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  userName = '';
  userCreationStatus = 'Choose your Username.';

  constructor() { }

  ngOnInit() {
  }

  onCreateUser() {
    this.userName = '';
    this.userCreationStatus = 'The Username has been erased! ' + this.userName;
  }

  onUpdateInputName(event: Event) {
    this.userName = '';
  }

}
