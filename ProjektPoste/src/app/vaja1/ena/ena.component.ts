import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { defineBase } from '@angular/core/src/render3';

export interface NewCat { name: string, description: string, imgUrl: any };
export interface CatZapis { dataId: string, data: NewCat };

@Component({
  selector: 'app-ena',
  templateUrl: './ena.component.html',
  styleUrls: ['./ena.component.css']
})
export class EnaComponent implements OnInit {
  private catDoc: AngularFirestoreDocument<NewCat>;
  private catCol: AngularFirestoreCollection<NewCat>
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  uploadState: Observable<string>;
  downloadURL: Observable<string>;
  imgEvent: any;
  catName: string;
  catDesc: string;
  startQuery: number;
  buttonDisable: boolean;
  endQuery: number;
  // catPipe$: Observable<NewCat[]>;
  catPipe$: Observable<CatZapis[]>;
  displayedColumns: string[] = ['Name', 'Description', 'Image'];


  constructor(private dbStorage: AngularFireStorage,
              private db: AngularFirestore) {
                this.buttonDisable = true;
                this.catCol = this.db.collection<NewCat>('cats', ref => ref.orderBy('name').endAt('E') //startAt(this.startQuery)//.endAt(this.endQuery)   // ????? 
                );
                                              // private catCol = db.collection<NewCat>('cats');
                                              // this.catPipe$ = catCol.valueChanges();
                this.catPipe$ = this.catCol.snapshotChanges().pipe(
                  map(actions => {
                    return actions.map(a => {
                      const data = a.payload.doc.data() as NewCat;
                      const dataId = a.payload.doc.id;
                      return { dataId, data};
                    })
                  })
                )
              
                 

  }

  ngOnInit() {
    // this.catPipe$ = this.catCol.valueChanges();
  }



  storeEvent($event) {
    this.imgEvent = $event;
    this.buttonDisable = false;
  }
  upload(catName, catDesc) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.dbStorage.ref('cats/' + id);
    this.task = this.ref.put(this.imgEvent.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.then(
       x => { this.downloadURL = this.ref.getDownloadURL();
              this.downloadURL.subscribe(x => {
                  this.uploadFirestore(catName, catDesc, x)
                   });
               this.uploadState = null;
                   }
    )
  }
  uploadFirestore(name, description, imgUrl){
    // this.catCol = this.db.collection<NewCat>('cats');
    const data: NewCat = { name, description, imgUrl };
    console.log(data);
    this.catCol.add(data); 
    this.buttonDisable = true;
  }
  deleteCat(item: CatZapis){
    console.log(item);  
    this.catDoc = this.db.doc(`cats/${item.dataId}`);
    this.catDoc.delete();
  }









  /////////////////////////////
  sortAD() {
    this.catCol = this.db.collection<NewCat>('cats', ref => ref.orderBy('name').endAt('E'));
    this.catPipe$ = this.catCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as NewCat;
          const dataId = a.payload.doc.id;
          return { dataId, data};
        })
      })
    )
  }
  sortEI() {
    this.catCol = this.db.collection<NewCat>('cats', ref => ref.orderBy('name').startAt('E').endAt('J'));
    this.catPipe$ = this.catCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as NewCat;
          const dataId = a.payload.doc.id;
          return { dataId, data};
        })
      })
    )
  }
  sortJN() {
    this.catCol = this.db.collection<NewCat>('cats', ref => ref.orderBy('name').startAt('J').endAt('O'));
    this.catPipe$ = this.catCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as NewCat;
          const dataId = a.payload.doc.id;
          return { dataId, data};
        })
      })
    )
  }
  sortOS() {
    this.catCol = this.db.collection<NewCat>('cats', ref => ref.orderBy('name').startAt('O').endAt('T'));
    this.catPipe$ = this.catCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as NewCat;
          const dataId = a.payload.doc.id;
          return { dataId, data};
        })
      })
    )
  }
  sortTZ() {
    this.catCol = this.db.collection<NewCat>('cats', ref => ref.orderBy('name').startAt('T'));
    this.catPipe$ = this.catCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as NewCat;
          const dataId = a.payload.doc.id;
          return { dataId, data};
        })
      })
    )
  }

  cancelFile() {
    this.buttonDisable = true;
  }
}









