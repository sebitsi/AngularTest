import { Component, OnInit } from '@angular/core';
// import { Polje } from '../polje';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  clickMessage: string = '';
  someInput: string = '';
  poljeArray =[];
    onClickMe() {
      
      this.clickMessage = this.someInput;
      if (this.clickMessage) {
      this.poljeArray.push(this.clickMessage);
      this.someInput = '';
    }
  }

  constructor() {}

  ngOnInit() {
  }
  
}

  
