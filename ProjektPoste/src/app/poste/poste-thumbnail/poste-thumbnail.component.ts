import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { DomPortalHost } from '@angular/cdk/portal';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-poste-thumbnail',
  templateUrl: './poste-thumbnail.component.html',
  styleUrls: ['./poste-thumbnail.component.css']
})
export class PosteThumbnailComponent implements OnInit {
    // @Input() slikapath: string;


   mojUrl: SafeResourceUrl;

   constructor(public dialogRef: MatDialogRef<PosteThumbnailComponent>, 
                      @Inject(MAT_DIALOG_DATA) public data: any,
                      private sanitizer: DomSanitizer) {

      this.mojUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.bookPdf);

    }

  
    onNoClick(): void {
      this.dialogRef.close();
    }
    



  ngOnInit() {
    
  }
  

}