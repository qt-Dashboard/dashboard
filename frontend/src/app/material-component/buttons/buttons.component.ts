import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',

  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor() { }
}
