import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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

export class UsersComponent implements OnInit{
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
  }


  

    ngOnInit(): void {
      this.getUsers();
    }
  
    deleteUser(userId: string)  {
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
    this.usersService.getUsers().subscribe((users:any) => {
      this.users = users;
    });
  }
}
