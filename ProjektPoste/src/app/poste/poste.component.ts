import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})

export class PosteComponent implements OnInit {
  public najdeno: any;
  public columnsToDisplay = ['title'];
  public params;
  displayedColumns: string[] = ['Title', 'Page count', 'Link'];
  searchForm: FormGroup;
  orderBy: string[] = ['Relevance', 'Newest'];
  opcije: string[] = ['All', 'Books', 'Magazines'];
  

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'formtitle': new FormControl(null),
      'formauthor': new FormControl(null),
      'formcount': new FormControl('20', Validators.required),
      'formorder': new FormControl('Relevance'),
      'formselect': new FormControl('All')

    });
  }

  // public IsciKnjige(){
  //   // this.params = new HttpParams().set("q", this.iskalniNiz).set("maxResults", this.pageCount); //Create new HttpParams
  //   // this.serverService.getPoste(this.iskalniNiz, this.pageCount, this.params)
  //   //   .subscribe(
  //   //     (response: any) => {
  //   //       const data = response;
  //   //       console.log(data);
  //   //       this.najdeno = data.items;
  //   //     },
  //   //     (error) => console.log(error),
  //   //   );
  // }
  
  onSubmit() {
    
    this.params = new HttpParams().
                                  //set("q", "intitle:"+ this.searchForm.get("formtitle").value).//+"inauthor:"+'Josip').
                                  set("q", "intitle:"+ this.searchForm.get("formtitle").value + '+' + "inauthor:"+ this.searchForm.get("formauthor").value).
                                  //set("q", "inauthor:"+ this.searchForm.get("formauthor").value).
                                  set("maxResults", this.searchForm.get("formcount").value).
                                  set("orderBy", this.searchForm.get("formorder").value).
                                  set("printType", this.searchForm.get("formselect").value); 
                                  //Create new HttpParams


    this.serverService.getPoste(this.params)
      .subscribe(
        (response: any) => {
          const data = response;
          console.log(data);
          this.najdeno = data.items;
        },

        (error) => console.log(error),
      );
  }
  
}

 
