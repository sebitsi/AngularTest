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
// if variables
  titleSearch: string;
  authorSearch: string;
  temp1: string = null;
  temp2: string = null;
  temp3: string;
  temp4: string;
  

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
    this.titleSearch = this.searchForm.get("formtitle").value;
    this.authorSearch = this.searchForm.get("formauthor").value;
    // --------------------------------------------------------------------
    if (this.titleSearch) {
      this.temp1 = '+' + '"intitle:"'+ '+' + this.titleSearch;
    }
    else{
      this.temp1 = null;
    }
    if (this.authorSearch) {
      this.temp2 = '+' + '"inauthor:"' + '+' + this.authorSearch;
    }
    else{
      this.temp2 = null;
    }
    this.temp3 = this.temp1 + this.temp2;
    if (!this.titleSearch && !this.authorSearch){
      this.temp4 = this.temp3;
    }
    else{
      this.temp4 = this.temp3.substr(1);
    }
    if (this.titleSearch && !this.authorSearch){
      this.temp4 = this.temp1.substr(1);
    }
    console.log(this.temp3);
    console.log(this.temp4);
    // --------------------------------------------------------------------
    this.params = new HttpParams().
                                  //set("q", "intitle:"+ this.searchForm.get("formtitle").value).//+"inauthor:"+'Josip').
                                  // set("q", "intitle:"+ this.searchForm.get("formtitle").value + '+' + "inauthor:"+ this.searchForm.get("formauthor").value).
                                  set("q", this.temp4).
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

 
