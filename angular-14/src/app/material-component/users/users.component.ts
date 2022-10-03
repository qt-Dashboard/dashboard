import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Sort } from "@angular/material/sort";


export interface User {
  id?: string;
  name?: string;
  password?: string;
  email: string;
  phone?: string;
  token?: string;
  isAdmin?: boolean;
  street?: string;
  apartment?: string;
  zip?: string;
  city?: string;
  country?: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'isAdmin', 'country', 'iconUpd', 'iconDel'];

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private usersService: UsersService,
    private router: Router,
    private service: UsersService
  ) {
    this.service.getUsers().subscribe(users => {
      this.users = users;
    });
    this.users = this.users.slice();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(userId: string) {
    if (confirm(`Voulez-vous vraiment supprimer cet utilisateur ?`)) {
      this.usersService.deleteUser(userId).subscribe({
        next: () => this.getUsers()
      }),
        this.snackBar.open("Vous avez bien supprimé l'utilisateur", 'Retour', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
    }
    // this.dialog
    //   .open(DialogConfirmComponent, {
    //     data: `Voulez-vous vraiment supprimer ?`,
    //   })
    //   .afterClosed()
    //   this.usersService.deleteUser(userId).subscribe((confirm: Boolean) => {
    //     if (confirm) {
    //       this.getUsers();
    //       this.snackBar.open("Vous avez bien supprimé l'utilisateur", 'Retour', {
    //         horizontalPosition: this.horizontalPosition,
    //         verticalPosition: this.verticalPosition,
    //       });
    //   }});
  }

  updateUser(userid: string) {
    this.router.navigateByUrl(`/users/form/${userid}`);
  }

  private getUsers() {
    this.usersService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  // ---------------------------------------------------

  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.users = data;
      return;
    }

    this.users = data.sort((a: User, b: User) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name?.toLocaleLowerCase(), b.name?.toLocaleLowerCase(), isAsc);
        case 'email':
          return compare(a.email?.toLocaleLowerCase(), b.email?.toLocaleLowerCase(), isAsc);
        case 'isAdmin':
          return compare(a.isAdmin, b.isAdmin, isAsc);
        case 'country':
          return compare(a.country, b.country, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: any | string, b: any | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}