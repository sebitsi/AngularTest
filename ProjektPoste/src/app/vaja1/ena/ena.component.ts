import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-ena',
  templateUrl: './ena.component.html',
  styleUrls: ['./ena.component.css']
})
export class EnaComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  uploadState: Observable<string>;
  downloadURL: Observable<string>;

  constructor(private dbStorage: AngularFireStorage) { 

  }

  ngOnInit() {
  }

  upload($event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.dbStorage.ref('cats/' + id);
    this.task = this.ref.put($event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    // this.downloadURL = this.ref.getDownloadURL();
  }
clicktest(){
  this.downloadURL = this.ref.getDownloadURL();
}


}
