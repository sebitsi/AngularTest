import { Component, OnInit, Input } from '@angular/core';
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
  
  @Input() public ime: string;


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

  
