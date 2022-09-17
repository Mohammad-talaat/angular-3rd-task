import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})


  export class DialogTest implements OnInit {
    constructor(
      public dialogRef: MatDialogRef<DialogTest>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    ngOnInit(): void {
      console.log(this.data)
    }

    closeDialog(): void {
      this.dialogRef.close();
    }
  }


