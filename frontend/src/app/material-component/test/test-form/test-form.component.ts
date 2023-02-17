import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategorySelect } from 'src/app/models/categoryTest.model';
import { MapService } from 'src/app/services/map.service';
import { timer } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  isEditMode = false;

  categories: CategorySelect[] = [
    {value: 'hospitals', viewValue: 'Centres hospitaliers'},
    {value: 'bakeries', viewValue: 'Boulangeries'},
  ];
  constructor(
    private location: Location,

  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.location.back();
  }

}
