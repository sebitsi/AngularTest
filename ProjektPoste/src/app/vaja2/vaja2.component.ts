import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

declare var firebase: any;

@Component({
  selector: 'app-vaja2',
  templateUrl: './vaja2.component.html',
  styleUrls: ['./vaja2.component.css']
})
export class Vaja2Component implements OnInit {
  names = [
    {
      name: 'Jan',
      id: 1,
    },
    {
      name: 'Tomaž',
      id: 2,
    }
  ];

  constructor(private ServerService: ServerService) { }

  snapshot: ActivatedRouteSnapshot;
  ngOnInit() {
    this.fbGetData();
  }
  // onAddName(nameValue: string){
  //   this.names.push(
  //     {
  //       name: nameValue,
  //       id: this.generateId()
  //     }
  //   );
  // }
  // onSave() {
  //   this.ServerService.storeName(this.names)
  //     .subscribe(
  //       (response: any) => {
  //         const data = response;
  //         console.log(data);
  //         // this.najdeno = data.items;
  //       }
  //     );
  // }

  fbGetData(){
    firebase.database().ref('/users/users/').on('child_added', (snapshot) => {
      console.log(snapshot)
    })
  }


  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
