import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface NewName { name: string, sport: string }

@Component({
  selector: 'app-vaja2',
  templateUrl: './vaja2.component.html',
  styleUrls: ['./vaja2.component.css']
})
export class Vaja2Component implements OnInit {
////////////////////////////////////////////////////////////
  private itemDoc: AngularFirestoreDocument<NewName>;
  private itemDoc2: AngularFirestoreCollection<NewName>
  itemPipe$: Observable<NewName[]>;
  inputName: string;
  inputSport: string;
  sportSelection: string = 'Football';
  opcije: string[] = ['Football', 'Handball', 'Tennis', 'Waterpolo', 'Table tennis'];
  displayedColumns: string[] = ['Name', 'Sport'];

  constructor(db: AngularFirestore,
              db2: AngularFirestore) { 
                // this.itemDoc = db.doc('users/LZh0rDTudzT9KaA7tHFd');
                // this.itemPipe$ = this.itemDoc.valueChanges();
                // this.itemDoc2 = db2.collection<NewName>('users', ref => ref.where('sport', '==', this.sportSelection));
                this.itemDoc2 = db2.collection<NewName>('users', ref => ref.orderBy('sport'));
                this.itemPipe$ = this.itemDoc2.valueChanges();
               }

              update(name: string, sport: string) {
                const data: NewName = { name, sport};
                this.itemDoc2.add(data);
                this.inputName = "";
                this.inputSport = "";
                // this.db2.collection('users').doc('this.generateId()').set({ name: nameData, sport: sportData})
                
              }

  ngOnInit() {
}

private generateId() {
  return Math.round(Math.random() * 10000);
}
}