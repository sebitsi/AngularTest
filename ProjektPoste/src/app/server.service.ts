import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ServerService {
    
     constructor(private http: HttpClient) {}
     // ----------------------------vrednosti za if stavke
     titleSearch: string;
     authorSearch: string;
     temp1: string = null;
     temp2: string = null;
     temp3: string;
     temp4: string;

     params: any;
     //------------------------------Form values
     formtitle: string;
     formauthor: string;
     formcount: string;
     formorder: string;
     formselect: string;
     
     getPoste(x) {
          this.formtitle = x[0];
          this.formauthor = x[1];
          this.formcount = x[2];
          this.formorder = x[3];
          this.formselect = x[4];
          
          this.titleSearch = x[0];
          this.authorSearch = x[1];
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
              console.log(x[0]);
              console.log(x[1]);
          // -------------------------------------------------------------------- Parametri ter klic http
               this.params = new HttpParams().
                              set("q", this.temp4).
                              set("maxResults", this.formcount).
                              set("orderBy", this.formorder).
                              set("printType", this.formselect); 
                                        //Create new HttpParams
               return this.http.get('https://www.googleapis.com/books/v1/volumes', {params: this.params});
        //  return this.http.get('http://192.168.200.203:5000/api/services/core/RTE/GetPosta');
     }
  // storeName(names: any[]) {
  //   return this.http.post('https://my-test-project-c4ce1.firebaseio.com/data.json ', names);
  // }
}