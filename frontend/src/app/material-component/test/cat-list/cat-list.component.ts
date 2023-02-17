import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from "../../confirm-dialog/confirm-dialog.component";
import { Sort } from "@angular/material/sort";
import { Category } from "src/app/models/category.model";
import { CategoriesService } from "src/app/services/categories.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'icon', 'iconUpd', 'iconDel']; 

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private categoriesService: CategoriesService,
    private router: Router,
    private location: Location,
    ) {}

  openDialog(categoryId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Voulez-vous supprimer cette catégorie ?',
        buttonText: {
          ok: 'Supprimer',
          cancel: 'Annuler'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.categoriesService.deleteCategory(categoryId).subscribe({
          next: () => {
            this.snackBar.open("Vous avez bien supprimé la catégorie", '', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            this.getCategories();
          },
          error: () => {
            this.snackBar.open("ERREUR : La catégorie n'a pas pu être supprimée", '', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  updateUser(categoryid: string) {
    this.router.navigateByUrl(`/cat-form/${categoryid}`);
  }

  private getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  sortData(sort: Sort) {
    const data = this.categories.slice();
    if (!sort.active || sort.direction === '') {
      this.categories = data;
      return;
    }

    this.categories = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a._id, b._id, isAsc);
        case 'name':
          return compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
        case 'icon':
          return compare(a.icon?.type.toLowerCase(), b.icon?.type.toLowerCase(), isAsc);
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
