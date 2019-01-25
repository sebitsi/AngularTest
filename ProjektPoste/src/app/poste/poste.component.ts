import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})

export class PosteComponent implements OnInit {
  public najdeno: any;
  public columnsToDisplay = ['title'];
  displayedColumns: string[] = ['Title', 'Page count', 'Link'];
  searchForm: FormGroup;
  orderBy: string[] = ['Relevance', 'Newest'];
  opcije: string[] = ['All', 'Books', 'Magazines'];

  skupni$: any;  

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'formtitle': new FormControl(null),
      'formauthor': new FormControl(null),
      'formcount': new FormControl('20', Validators.required),
      'formorder': new FormControl('Relevance'),
      'formselect': new FormControl('All')
    });
    
    this.skupni$ = combineLatest(this.searchForm.get('formtitle').valueChanges, 
                                 this.searchForm.get('formauthor').valueChanges, 
                                 this.searchForm.get('formcount').valueChanges, 
                                 this.searchForm.get('formorder').valueChanges, 
                                 this.searchForm.get('formselect').valueChanges);

    this.skupni$
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe(x => {
          console.log(x);
          this.serverService.getPoste(x)
          .subscribe(
            (response: any) => {
              const data = response;
              // console.log(data);
              this.najdeno = data.items;
            },
    
            (error) => console.log(error),
          );
    });

    this.searchForm.patchValue({
      formtitle: "",
      formauthor: "",
      formcount: "20",
      formorder: "Relevance",
      formselect: "All"
    })
  }
 }