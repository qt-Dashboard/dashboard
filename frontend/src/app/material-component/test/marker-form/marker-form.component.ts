import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Markers } from 'src/app/models/marker.model';
import { Category } from 'src/app/models/category.model';
import { MarkersService } from 'src/app/services/markers.service';
import { timer } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-marker-form',
  templateUrl: './marker-form.component.html',
  styleUrls: ['./marker-form.component.css']
})
export class MarkerFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted = false;
  isEditMode = false;
  currentMarkerId!: string;

  categories: Category[] = []
  addCategory: any;

  category = this.categoriesService.getCategories().subscribe((categories: any) => {
    categories.forEach((cat:any) => {
      categories = [{_id: cat._id, name: cat.name}]
      this.addCategory = this.categories.push({
        _id: cat._id,
        name: cat.name,
        icon: cat.icon
      })
    })
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(
    private formBuilder: FormBuilder,
    private markersService: MarkersService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.initMarkerForm();
    this.checkEditForm();
  }

  private initMarkerForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lon: ['', Validators.required],
      lat: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  private addMarker(marker: Markers) {
    this.markersService.createMarker(marker).subscribe({
      next: () => {
        this.snackBar.open("Le marqueur a bien été créé", '', {
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
        this.snackBar.open("ERREUR : Le marqueur n'a pas pu être créée", '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
  }

  private modifyMarker(marker: Markers) {
    this.markersService.updateMarker(marker).subscribe({
      next: () => {
        this.snackBar.open("Le marqueur a bien été mis à jour", '', {
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
        this.snackBar.open("ERREUR : Le marqueur n'a pas été mise à jour", '', {
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
        this.currentMarkerId = params['id'];
        this.markersService.getMarker(params['id']).subscribe((marker: Markers) => {
          this.markerForm['name'].setValue(marker.name);
          this.markerForm['lon'].setValue(marker.lon);
          this.markerForm['lat'].setValue(marker.lat);
          this.markerForm['categoryId'].setValue(marker.categoryId);
        });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
  
    const marker: Markers = {
      _id: this.currentMarkerId,
      name: this.markerForm['name'].value,
      lon: this.markerForm['lon'].value,
      lat: this.markerForm['lat'].value,
      categoryId: this.markerForm['categoryId'].value,
    };
    if (this.isEditMode) {
      this.modifyMarker(marker);
    } else {
      this.addMarker(marker);
    }
  }

  onCancel() {
    this.location.back();
  }

  get markerForm() {
    return this.form.controls;
  }

}
