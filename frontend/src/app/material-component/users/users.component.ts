import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { Sort } from "@angular/material/sort";
import { User } from "src/app/models/user.model";


@Component({
  selector: "my-app",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'role', 'email', 'iconUpd', 'iconDel']; 

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private usersService: UsersService,
    private router: Router
    ) {}

  openDialog(userId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Voulez-vous supprimer cet utilisateur ?',
        buttonText: {
          ok: 'Supprimer',
          cancel: 'Annuler'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.usersService.deleteUser(userId).subscribe({
          next: () => {
            this.snackBar.open("Vous avez bien supprimé l'utisateur", '', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            this.getUsers();
          },
          error: () => {
            this.snackBar.open("ERREUR : l'utilisateur n'a pas pu être supprimé !", '', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }
        });
        
      }
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  updateUser(userid: string) {
    this.router.navigateByUrl(`/users/form/${userid}`);
  }

  private getUsers() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.users = data;
      return;
    }

    this.users = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a._id, b._id, isAsc);
        case 'lastName':
          return compare(a.firstName.toLowerCase(), b.firstName.toLowerCase(), isAsc);
        case 'firstName':
          return compare(a.lastName.toLowerCase(), b.lastName.toLowerCase(), isAsc);
        case 'role':
          return compare(a.role?.toLowerCase(), b.role?.toLowerCase(), isAsc);
        case 'email':
          return compare(a.email.toLowerCase(), b.email.toLowerCase(), isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: any | string, b: any | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}