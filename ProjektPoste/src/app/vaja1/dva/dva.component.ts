import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dva',
  template: `{{ data$  | async }}`,
  styleUrls: ['./dva.component.css']
})
export class DvaComponent implements OnInit {



  constructor() { 
  }

  ngOnInit() {
  }

}
