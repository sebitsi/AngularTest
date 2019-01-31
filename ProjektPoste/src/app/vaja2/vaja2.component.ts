import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface NewName { name: string, sport: string }// key: string; }
export interface Zapis { dataId: string, data: NewName } 
//export interface NewNameId extends NewName { id: string; }

@Component({
  selector: 'app-vaja2',
  templateUrl: './vaja2.component.html',
  styleUrls: ['./vaja2.component.css']
})
export class Vaja2Component implements OnInit {
////////////////////////////////////////////////////////////
  private itemDoc: AngularFirestoreDocument<NewName>;
  private itemCol: AngularFirestoreCollection<NewName>
  itemPipe0$: Observable<NewName[]>;
  itemPipe$: Observable<Zapis[]>;
  inputName: string;
  inputSport: string;
  sportSelection: string = 'Football';
  opcije: string[] = ['Football', 'Handball', 'Tennis', 'Waterpolo', 'Table tennis'];
  displayedColumns: string[] = ['Name', 'Sport'];

  constructor(private db: AngularFirestore) { 
                // this.itemDoc = db.doc('users/LZh0rDTudzT9KaA7tHFd');
                // this.itemPipe$ = this.itemDoc.valueChanges();
                // this.itemDoc2 = db2.collection<NewName>('users', ref => ref.where('sport', '==', this.sportSelection));
                this.itemCol = db.collection<NewName>('users', ref => ref.orderBy('sport'));
//                this.itemPipe$ = this.itemCol.valueChanges();
                this.itemPipe$ = this.itemCol.snapshotChanges().pipe(
                  map(actions => {
                    return actions.map(a => {
                      const data = a.payload.doc.data() as NewName;
                      const dataId = a.payload.doc.id;
                      return { dataId, data };
                    }
                    )}));
                  

                      

               }
  ngOnInit() {
    const idData = this.itemCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as NewName;
          const dataId = a.payload.doc.id;
          return { dataId, data };
        }
        )}));
}

update(name: string, sport: string) {
 const data: NewName = { name, sport};
 this.itemCol.add(data);
  this.inputName = "";
  this.inputSport = "";
  // this.db2.collection('users').doc('this.generateId()').set({ name: nameData, sport: sportData})
  
}
delete(item: Zapis){
  console.log(item);  
  this.itemDoc = this.db.doc(`users/${item.dataId}`);
  this.itemDoc.delete();
}
testtest() {
//  console.log(this.idData);
}

private generateId() {
  return Math.round(Math.random() * 10000);
}
}