import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { timer } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {
  form!: FormGroup;
  percentDone: any = 0;
  preview: string = '';
  isSubmitted = false;
  isEditMode = false;
  currentCategoryId!: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      icon: [null]
    })
  }

  ngOnInit(): void {
    this.initCategoryForm();
    this.checkEditForm();
  }

  private initCategoryForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required]
    });
  }

  public uploadFile(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({
      icon: file
    });
    this.form.get('icon')?.updateValueAndValidity()
    // File preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  private addCategory() {
    this.categoriesService.createCategory(
      this.form.value.name,
      this.form.value?.icon,
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
          console.log('User successfully created!', event.body);
          this.percentDone = true;
          this.snackBar.open(`${event.body.message}`, '', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.router.navigate(['cat-list'])
            });
      }
    })/*, ({
      next: () => {
        this.snackBar.open("La catégorie a bien été créée", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      error: () => {
        this.snackBar.open("ERREUR : La catégorie n'a pas pu être créée", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });*/
  }

  private modifyCategory() {  
    this.categoriesService.updateCategory(
      this.form.value.name,
      this.form.value.icon,
      this.currentCategoryId
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
              this.router.navigate(['cat-list'])
            });
      }
    });
  }

  private checkEditForm() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.currentCategoryId = params['id'];
        this.categoriesService.getCategory(params['id']).subscribe((category: Category) => {
          this.categoryForm['name'].setValue(category.name);
        });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.isEditMode) {
      this.modifyCategory();
    } else {
      this.addCategory();
    }
  }

  onCancel() {
    this.location.back();
  }

  get categoryForm() {
    return this.form.controls;
  }

}
