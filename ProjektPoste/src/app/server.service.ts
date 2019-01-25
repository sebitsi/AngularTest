import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ServerService {
    
     constructor(private http: HttpClient) {}
     titleSearch: string;
     authorSearch: string;
     temp1: string = null;
     temp2: string = null;
     temp3: string;
     temp4: string;
     searchForm: FormGroup;

     getPoste(params: any, forma) {
          this.searchForm = forma;
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
               params = new HttpParams().
                              //set("q", "intitle:"+ this.searchForm.get("formtitle").value).//+"inauthor:"+'Josip').
                              // set("q", "intitle:"+ this.searchForm.get("formtitle").value + '+' + "inauthor:"+ this.searchForm.get("formauthor").value).
                              set("q", this.temp4).
                              set("maxResults", this.searchForm.get("formcount").value).
                              set("orderBy", this.searchForm.get("formorder").value).
                              set("printType", this.searchForm.get("formselect").value); 
                                        //Create new HttpParams
               return this.http.get('https://www.googleapis.com/books/v1/volumes', {params: params});
        //  return this.http.get('http://192.168.200.203:5000/api/services/core/RTE/GetPosta');
     }
}