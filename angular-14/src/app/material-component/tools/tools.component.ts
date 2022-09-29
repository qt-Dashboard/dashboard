import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'; // import pour le formulaire
import { ErrorStateMatcher, MatDateFormats, NativeDateAdapter, ThemePalette } from '@angular/material/core';

// Checkbox
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
// Checkbox fin

// Date
export const MY_FORMAT: MatDateFormats = {
  parse: { dateInput: 'DD/MM/YYYY', },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
// Date

// Selecteur basique
interface Food {
  value: string;
  viewValue: string;
}
// Selecteur basique fin

// message d'erreur
// Error when invalid control is dirty, touched, or submitted.
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
// message d'erreur fin

@Injectable() export class MyDateAdapter extends NativeDateAdapter {
  getFirstDayOfWeek(): number { return 1; }
}

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})

export class ToolsComponent implements OnInit {

  // Selecteur basique
  foods: Food[] = [
    { value: 'Steak', viewValue: 'Steak' },
    { value: 'Pizza', viewValue: 'Pizza' },
    { value: 'Tacos', viewValue: 'Tacos' },
  ];
  // Selecteur basique fin

  // multiple selection
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  // multiple selection fin

  // message d'erreur
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
  // message d'erreur fin


  // Checkbox
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
  // Checkbox fin

  // Mot de passe
  hide = true;
  // Mot de passe fin





  constructor() { }

  ngOnInit(): void {
  }

}
