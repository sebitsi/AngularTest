import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { strictEqual } from 'assert';
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

      this.dogodek.emit("Kliknil me je !!");
    }

  constructor() {
    this.dogodek = new EventEmitter<String>();


  }

  ngOnInit() {
  }


  // ------------------------
  @Input()  
  public vhodna: string;
    
  // @Output()
  // public izhodna: string;

  @Output()
  public dogodek: EventEmitter<String>;




}

  
