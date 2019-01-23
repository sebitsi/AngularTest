import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
    skip: string;
     constructor(private http: HttpClient) {}
     getPoste(skip: string) {
         this.skip = skip;
         return this.http.get('http://192.168.200.203:5000/api/services/core/RTE/GetPosta');
     }
}