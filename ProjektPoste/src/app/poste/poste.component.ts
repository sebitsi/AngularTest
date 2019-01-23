import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {
  public iskalniNiz: string;
  public pageCount: string = "20";
  public najdeno: any;
  public columnsToDisplay = ['title'];
  public params;
  

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  public IsciKnjige(){
    this.params = new HttpParams().set("q", this.iskalniNiz).set("maxResults", this.pageCount); //Create new HttpParams

    this.serverService.getPoste(this.iskalniNiz, this.pageCount, this.params)
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

 
