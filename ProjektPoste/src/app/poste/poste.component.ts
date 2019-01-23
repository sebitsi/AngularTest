import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {
  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }
  onGet(skip2:string){
    this.serverService.getPoste(skip2)
      .subscribe(
        (response: Response) => {
          const data = response.json()
        },
        (error) => console.log(error),
        
      );
  }

}
