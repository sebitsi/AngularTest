import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dva',
  template: `{{ data$  | async }}`,
  styleUrls: ['./dva.component.css']
})
export class DvaComponent implements OnInit {

data$: Observable<string>;

  constructor(private fns: AngularFireFunctions) { 
    // const cors = require('cors')({origin: true});
    const callable = fns.httpsCallable('helloWorld');
    this.data$ = callable({ name: 'Jan'});
  }

  ngOnInit() {
  }

}
