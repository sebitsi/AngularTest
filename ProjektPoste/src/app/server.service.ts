import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ServerService {
    
     constructor(private http: HttpClient) {}
     

     getPoste(params: any) {
         return this.http.get('https://www.googleapis.com/books/v1/volumes', {params: params});
        //  return this.http.get('http://192.168.200.203:5000/api/services/core/RTE/GetPosta');
     }
}