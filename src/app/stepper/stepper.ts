import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Game } from '../models/Game'; 
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'stepper-vertical',
  templateUrl: 'stepper-vertical.html',
  styleUrl: 'stepper.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class StepperVerticalExample implements OnInit {
  private _formBuilder = inject(FormBuilder);


  @Input() receivedArray: Game[] = [];
  
  @Output() receivedArrayChange = new EventEmitter<Game[]>();

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
 
  isLinear = false;

  constructor(public dialog: MatDialog) {

  }
  openWarningDialog(): void {
    this.dialog.open(WarningDialogComponent);
  }
  
  ngOnInit(): void {}

  saveGame(): void {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      const gameName = this.firstFormGroup.get('firstCtrl')?.value || '';
      const description = this.secondFormGroup.get('secondCtrl')?.value || '';
      const date = this.thirdFormGroup.get('thirdCtrl')?.value || '';

      const newGame: Game = {
        id: this.receivedArray.length + 1,
        gameName: gameName,
        description: description,
        date: date,
      };
      this.receivedArray.push(newGame);
      this.receivedArrayChange.emit(this.receivedArray)
      console.log('New game:', gameName);
    } else {
      this.openWarningDialog();
    }
  }

}
