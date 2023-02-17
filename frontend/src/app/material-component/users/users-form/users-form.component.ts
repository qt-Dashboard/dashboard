import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { timer } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

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
  preview: string = '';
  percentDone: any = 0;
  isSubmitted = false;
  isEditMode = false;
  currentUserId!: string;
  isAdmin: boolean = false;
  role!: string | null; 

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
    private router: Router,
    private snackBar: MatSnackBar,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.initUserForm();
    this.checkEditMode();
    this.checkIsAdmin();
  }

  private initUserForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['user', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      avatar: ['', Validators.required]
    });
  }

  public uploadFile(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar')?.updateValueAndValidity()
    // File preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  private addUser() {
    this.usersService.createUser(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.role,
      this.form.value.email,
      this.form.value.password,
      this.form.value.avatar
    ).subscribe((event : HttpEvent<any>) => {
      switch(event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total! * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          this.percentDone = true;
          this.snackBar.open(`${event.body.message}`, '', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.router.navigate(['users'])
            });
      }
    // }
    //   {
    //   next: () => {
    //     this.snackBar.open("L'utilisateur a bien été créé", '', {
    //       horizontalPosition: this.horizontalPosition,
    //       verticalPosition: this.verticalPosition,
    //     });
    //     timer(2000)
    //       .toPromise()
    //       .then(() => {
    //         this.location.back();
    //       });
    //   },
    //   error: () => {
    //     this.snackBar.open("ERREUR : L'utilisateur n'a pas pu être créé", '', {
    //       horizontalPosition: this.horizontalPosition,
    //       verticalPosition: this.verticalPosition,
    //     });
    //   }
    // });
    });
  }

  private modifyUser() {
    this.usersService.updateUser(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.role,
      this.form.value.email,
      this.form.value.password,
      this.form.value.avatar,
      this.currentUserId
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total! * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('Category successfully updated !', event.body);
          this.percentDone = true;
          this.snackBar.open(`${event.body.message}`, '', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.router.navigate(['users']);
            });
      }
    });
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

  private checkIsAdmin() {
    if (this.tokenStorage.getToken()) {
      this.role = this.tokenStorage.getRole();
      if (this.role === 'admin') {
        this.isAdmin = true;
      }
    }
  }

  onSubmit() {
    this.isSubmitted = true;
  
    if (this.isEditMode) {
      this.modifyUser();
    } else {
      this.addUser();
    }
  }

  onCancel() {
    this.location.back();
  }

  get userForm() {
    return this.form.controls;
  }

}