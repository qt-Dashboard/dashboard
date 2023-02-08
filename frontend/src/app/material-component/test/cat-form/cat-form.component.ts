import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { timer } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  isEditMode = false;
  currentCategoryId!: string;
  fileName = '';

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.initCategoryForm();
    this.checkEditForm();
  }

  private initCategoryForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      variable: ['', Validators.required],
    });
  }

  private addCategory(category: Category) {
    this.categoriesService.createCategory(category).subscribe({
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
    });
  }

  private modifyCategory(category: Category) {
    this.categoriesService.updateCategory(category).subscribe({
      next: () => {
        this.snackBar.open("La catégorie a bien été mise à jour", '', {
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
        this.snackBar.open("ERREUR : La catégorie n'a pas été mise à jour", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
  }

  private checkEditForm() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.currentCategoryId = params['id'];
        this.categoriesService.getCategory(params['id']).subscribe((category:Category) => {
          this.categoryForm['name'].setValue(category.name);
          this.categoryForm['variable'].setValue(category.variable);
          this.categoryForm['icon'].setValue(category.icon);
        });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
  
    const category: Category = {
      _id: this.currentCategoryId,
      name: this.categoryForm['name'].value,
      variable: this.categoryForm['variable'].value,
    };
    if (this.isEditMode) {
      this.modifyCategory(category);
    } else {
      this.addCategory(category);
    }
  }

  onCancel() {
    this.location.back();
  }

  onFileSelected(event: { target: { files: File[]; }; }) {
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);
        const upload$ = this.http.post("/api/thumbnail-upload", formData);
        upload$.subscribe();
    }
  }

  get categoryForm() {
    return this.form.controls;
  }

}
