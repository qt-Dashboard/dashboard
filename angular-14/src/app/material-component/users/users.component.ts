import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface User {
  id: number;
  prenom: string;
  nom: string;
  role: string;
  adressMail: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'prenom', 'nom', 'role', 'adressMail', 'iconUpd', 'iconDel']; 
  dataSource = new MatTableDataSource<User>();

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private usersService: UsersService,
    private router: Router,
    ) {}

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
          next: () => this.getUsers()
        }),
        this.snackBar.open("Vous avez bien supprimé l'utilisateur", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
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
    this.usersService.getUsers().subscribe((users:any) => {
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
          return compare(a.id, b.id, isAsc);
        case 'prenom':
          return compare(a.prenom.toLowerCase(), b.prenom.toLowerCase(), isAsc);
        case 'nom':
          return compare(a.nom.toLowerCase(), b.nom.toLowerCase(), isAsc);
        case 'role':
          return compare(a.role.toLowerCase(), b.role.toLowerCase(), isAsc);
        case 'adressMail':
          return compare(a.adressMail.toLowerCase(), b.adressMail.toLowerCase(), isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: any | string, b: any | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}