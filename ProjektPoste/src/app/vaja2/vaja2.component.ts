import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

export interface NewName { name: string, sport: string }// key: string; }
export interface Zapis { dataId: string, data: NewName } 

@Component({
  selector: 'app-vaja2',
  templateUrl: './vaja2.component.html',
  styleUrls: ['./vaja2.component.css']
})
export class Vaja2Component implements OnInit {
////////////////////////////////////////////////////////////
  private itemDoc: AngularFirestoreDocument<NewName>;
  private itemCol: AngularFirestoreCollection<NewName>;
  private userCol: AngularFirestoreCollection<NewName>;
  itemPipe0$: Observable<NewName[]>;
  itemPipe$: Observable<Zapis[]>;
  inputName: string;
  inputSport: string;
  Selectfield: FormControl = new FormControl("", null);
  // sportSelection: string = 'Football';
  opcije: string[] = ['All', 'Football', 'Handball', 'Tennis', 'Waterpolo', 'Table tennis'];
  displayedColumns: string[] = ['Name', 'Sport'];



  constructor(private db: AngularFirestore) { 
                // this.itemDoc = db.doc('users/LZh0rDTudzT9KaA7tHFd');
                // this.itemPipe$ = this.itemDoc.valueChanges();
                //const queryObservable 
                this.Selectfield.patchValue("All");
                this.userCol = db.collection<NewName>('users');

                this.Selectfield.valueChanges.subscribe(value => console.log(value));
                
                this.itemPipe$ = this.Selectfield.valueChanges.pipe(
                  switchMap((sel: string ) => {
//                      let userCol = db.collection<NewName>('users', ref => ref.where('sport', '==', sel));  // OLD EXAMPLE
                      let userCol = db.collection<NewName>('users', ref => sel == 'All' ? ref.orderBy('sport') : ref.where('sport', '==', sel));
                        // if (sel == 'All') {
                        //   userCol = db.collection<NewName>('users');          // OLD EXAMPLE
                        // }
                      let userPipe$ = userCol.snapshotChanges().pipe(
                        map(actions => {
                          return actions.map(a => {
                            const data = a.payload.doc.data() as NewName;
                            const dataId = a.payload.doc.id;
                            return { dataId, data };
                          }
                          )}));
      
                       return userPipe$;
                      }
                  )
                );
                
                this.Selectfield.patchValue("All");


//                 this.itemCol = db.collection<NewName>('users', ref => ref.where('sport', '==', this.selected));
// //                this.itemPipe$ = this.itemCol.valueChanges();
//                 this.itemPipe$ = this.itemCol.snapshotChanges().pipe(
//                   map(actions => {
//                     return actions.map(a => {
//                       const data = a.payload.doc.data() as NewName;
//                       const dataId = a.payload.doc.id;
//                       return { dataId, data };
//                     }
//                     )}));
                  

                      

               }
// constructor(private db: AngularFirestore) { 
//                 // this.itemDoc = db.doc('users/LZh0rDTudzT9KaA7tHFd');
//                 // this.itemPipe$ = this.itemDoc.valueChanges();
//                 if (this.selected == 'All') {
//                   this.itemCol = db.collection<NewName>('users', ref => ref.orderBy('sport'));
//                 }
//                 else {
//                   this.itemCol = db.collection<NewName>('users', ref => ref.where('sport', '==', this.selected));
//                 }
// //                this.itemPipe$ = this.itemCol.valueChanges();
//                 this.itemPipe$ = this.itemCol.snapshotChanges().pipe(
//                   map(actions => {
//                     return actions.map(a => {
//                       const data = a.payload.doc.data() as NewName;
//                       const dataId = a.payload.doc.id;
//                       return { dataId, data };
//                     }
//                     )}));
                  

                      

//                }
  ngOnInit() {
    // const idData = this.itemCol.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as NewName;
    //       const dataId = a.payload.doc.id;
    //       return { dataId, data };
    //     }
    //     )}));
}

// dobiPodatke(selected: string) {
//   if (this.selected == 'All') {
//     this.itemCol = this.db.collection<NewName>('users', ref => ref.orderBy('sport'));
//   }
//   else {
//     this.itemCol = this.db.collection<NewName>('users', ref => ref.where('sport', '==', this.selected));
//   }
//                   //this.itemPipe$ = this.itemCol.valueChanges();
//   this.itemPipe$ = this.itemCol.snapshotChanges().pipe(
//     map(actions => {
//       return actions.map(a => {
//         const data = a.payload.doc.data() as NewName;
//         const dataId = a.payload.doc.id;
//         return { dataId, data };
//       }
//       )}));
// }

update(name: string, sport: string) {
 const data: NewName = { name, sport };
 this.userCol.add(data);
  this.inputName = "";
  this.inputSport = "";
  // this.db2.collection('users').doc('this.generateId()').set({ name: nameData, sport: sportData})
  
}
delete(item: Zapis){
  console.log(item);  
  this.itemDoc = this.db.doc(`users/${item.dataId}`);
  this.itemDoc.delete();
}

private generateId() {
  return Math.round(Math.random() * 10000);
}
}