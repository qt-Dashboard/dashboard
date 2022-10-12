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
    {value: 'administrateur', viewValue: 'administrateur'},
    {value: 'modérateur', viewValue: 'modérateur'},
    {value: 'utilisateur', viewValue: 'utilisateur'},
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
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      role: ['', Validators.required],
      adressMail: ['', [Validators.required, Validators.email]],
      isAdmin: [false],
      street: [''],
      apartment: [''],
      zip: [''],
      city: [''],
      country: ['']
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
        this.usersService.getUser(params['id']).subscribe((user:any) => {
          this.userForm['prenom'].setValue(user.prenom);
          this.userForm['nom'].setValue(user.nom);
          this.userForm['role'].setValue(user.role);
          this.userForm['adressMail'].setValue(user.adressMail);
        });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
  
    const user: User = {
      id: this.currentUserId,
      prenom: this.userForm['prenom'].value,
      nom: this.userForm['nom'].value,
      role: this.userForm['role'].value,
      adressMail: this.userForm['adressMail'].value,
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


