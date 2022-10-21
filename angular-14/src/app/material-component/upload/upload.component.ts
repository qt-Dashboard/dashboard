import { Component, Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {
  public files: any[] = [];

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  onFileChange(pFileList: File[]) {

    this.files = Object.keys(pFileList).map(key => pFileList[<any>key]);
    this._snackBar.open("Successfully upload!", 'Close', {
      duration: 2000,
    });

  }
  deleteFile(f: any) {
    this.files = this.files.filter(function (w) { return w.name != f.name });
    this._snackBar.open("Successfully delete!", 'Close', {
      duration: 2000,
    });
  }

  openConfirmDialog(pIndex: any) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      panelClass: 'modal-xs'
    });
    dialogRef.componentInstance.fName = this.files[pIndex].name;
    dialogRef.componentInstance.fIndex = pIndex;


    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.deleteFromArray(result);
      }
    });
  }

  deleteFromArray(index: any) {
    console.log(this.files);
    this.files.splice(index, 1);
  }
}
