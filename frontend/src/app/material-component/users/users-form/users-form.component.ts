import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { timer } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  form!: FormGroup;
  isSubmitted = false;
  isEditMode = false;
  currentUserId!: string;

  roles: Role[] = [
    {value: 'admin', viewValue: 'administrateur'},
    {value: 'moderator', viewValue: 'modérateur'},
    {value: 'user', viewValue: 'utilisateur'},
  ];

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.initUserForm();
    this.checkEditMode();
  }

  private initUserForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  private addUser(user: User) {
    this.usersService.createUser(user).subscribe(
      () => {
        this.snackBar.open("L'utilisateur a bien été créé", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.snackBar.open("ERREUR : L'utilisateur n'a pas pu être créé", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    );
  }

  private modifyUser(user: User) {
    this.usersService.updateUser(user).subscribe(
      () => {
        this.snackBar.open("L'utilisateur a bien été mis à jour", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.snackBar.open("ERREUR : L'utilisateur n'a pas été mis à jour", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    );
  }

  private checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.currentUserId = params['id'];
        this.usersService.getUser(params['id']).subscribe((user:User) => {
          this.userForm['firstName'].setValue(user.firstName);
          this.userForm['lastName'].setValue(user.lastName);
          this.userForm['role'].setValue(user.role);
          this.userForm['email'].setValue(user.email);
        });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
  
    const user: User = {
      _id: this.currentUserId,
      firstName: this.userForm['firstName'].value,
      lastName: this.userForm['lastName'].value,
      role: this.userForm['role'].value,
      email: this.userForm['email'].value,
      password: this.userForm['password'].value,
    };
    if (this.isEditMode) {
      this.modifyUser(user);
    } else {
      this.addUser(user);
    }
  }

  onCancel() {
    this.location.back();
  }

  get userForm() {
    return this.form.controls;
  }

}