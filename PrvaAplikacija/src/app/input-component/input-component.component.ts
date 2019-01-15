import { Component, OnInit } from '@angular/core';
// import { Polje } from '../polje';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  clickMessage: string = '1';
  someInput: string = '';
  poljeArray =['test1, test2'];
    onClickMe() {
      this.clickMessage = this.someInput;
      {{this.clickMessage}};
      // let poljeObjekt = new Polje ();
      // poljeObjekt.vnos = this.clickMessage;
       this.poljeArray.push(this.clickMessage);

    }


  
  constructor() {}

  ngOnInit() {
  }
  
}

  
