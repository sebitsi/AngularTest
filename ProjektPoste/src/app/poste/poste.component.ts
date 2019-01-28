import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PosteThumbnailComponent } from './poste-thumbnail/poste-thumbnail.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css'],
  animations: [
    trigger('trigger1', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-300px)'
        }),
        animate(500)
      ])
      // state('highlighted', style({
      //   'background-color': 'rgba(255, 0, 0, 0.1)',
      //   opacity: 0.3
      // })
      
    ])
    // trigger('trigger1', [
    //   state('normal', style({
    //     'background-color': 'white'
    //   })), 
    //   state('highlighted', style({
    //     'background-color': 'rgba(255, 0, 0, 0.1)',
    //     opacity: 0.3
    //   }))
    // ])
  ]
})

export class PosteComponent implements OnInit {
  public najdeno: any;
  public columnsToDisplay = ['title'];
  displayedColumns: string[] = ['Title', 'Page count', 'Link', 'Thumbnail'];
  searchForm: FormGroup;
  orderBy: string[] = ['Relevance', 'Newest'];
  opcije: string[] = ['All', 'Books', 'Magazines'];
  state = 'normal';
  imgPath: string;

  skupni$: any;  

  constructor(private serverService: ServerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'formtitle': new FormControl(null),
      'formauthor': new FormControl(null),
      'formcount': new FormControl('20', Validators.required),
      'formorder': new FormControl('Relevance'),
      'formselect': new FormControl('All')
    });
    
    this.skupni$ = combineLatest(this.searchForm.get('formtitle').valueChanges, 
                                 this.searchForm.get('formauthor').valueChanges, 
                                 this.searchForm.get('formcount').valueChanges, 
                                 this.searchForm.get('formorder').valueChanges, 
                                 this.searchForm.get('formselect').valueChanges);

    this.skupni$
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe(x => {
          console.log(x);
          this.serverService.getPoste(x)
          .subscribe(
            (response: any) => {
              const data = response;
              console.log(data);
              this.najdeno = data.items;
            },
    
            (error) => console.log(error),
          );
    });

    this.searchForm.patchValue({
      formtitle: "",
      formauthor: "",
      formcount: "20",
      formorder: "Relevance",
      formselect: "All"
    })
  }

  OnAnimate(){
    if (this.state == 'normal'){
      this.state = 'highlighted';
    }
    else {
      this.state = 'normal';
    }
  }
  openDialog(path: string) {
    // this.imgPath = "{{item.volumeInfo.imageLinks?.smallThumbnail}}"
    const dialogRef = this.dialog.open(PosteThumbnailComponent, {
      // height: '50%',
      // width: '50%',
      data: { imgPath: path}
    });
  }
 }