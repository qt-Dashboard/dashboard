import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from "../../confirm-dialog/confirm-dialog.component";
import { Sort } from "@angular/material/sort";
import { Markers } from "src/app/models/marker.model";
import { MarkersService } from "src/app/services/markers.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-marker-list',
  templateUrl: './marker-list.component.html',
  styleUrls: ['./marker-list.component.css']
})
export class MarkerListComponent implements OnInit {
  markers: Markers[] = [];
  displayedColumns: string[] = ['id', 'name', 'lon', 'lat', 'categoryId', 'iconUpd', 'iconDel']; 

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private markersService: MarkersService,
    private router: Router,
    private location: Location,
    ) {}

  openDialog(markerId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Voulez-vous supprimer ce marqueur ?',
        buttonText: {
          ok: 'Supprimer',
          cancel: 'Annuler'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.markersService.deleteMarker(markerId).subscribe({
          next: () => this.getMarkers()
        }),
        this.snackBar.open("Vous avez bien supprimé le marqueur", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
  }

  ngOnInit(): void {
    this.getMarkers();
  }

  updateMarker(markerid: string) {
    this.router.navigateByUrl(`/marker-form/${markerid}`);
  }

  private getMarkers() {
    this.markersService.getMarkers().subscribe((markers) => {
      this.markers = markers;      
    });
  }

  sortData(sort: Sort) {
    const data = this.markers.slice();
    if (!sort.active || sort.direction === '') {
      this.markers = data;
      return;
    }

    this.markers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a._id, b._id, isAsc);
        case 'name':
          return compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
        case 'lon':
          return compare(a.lon, b.lon, isAsc);
        case 'lat':
          return compare(a.lat, b.lat, isAsc);
        case 'categoryId':
          return compare(a.categoryId?.toLowerCase(), b.categoryId?.toLowerCase(), isAsc);
        default:
          return 0;
      }
    });
  }

  onCancel() {
    this.location.back();
  }

}

function compare(a: any | string, b: any | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

