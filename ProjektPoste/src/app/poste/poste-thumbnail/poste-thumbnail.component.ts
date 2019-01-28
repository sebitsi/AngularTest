import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-poste-thumbnail',
  templateUrl: './poste-thumbnail.component.html',
  styleUrls: ['./poste-thumbnail.component.css']
})
export class PosteThumbnailComponent implements OnInit {
    @Input() slikapath: string;

   constructor(public dialogRef: MatDialogRef<PosteThumbnailComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }



  ngOnInit() {
  }

}