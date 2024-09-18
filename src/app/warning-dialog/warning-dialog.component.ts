import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-dialog',
  template: `
    <h1 mat-dialog-title>Ups.....</h1>
    <div mat-dialog-content>
      <p>El formulario no es válido,
         rellene todos los campos</p>
    </div>
    <div mat-dialog-actions>
    <button id= "bto" (click)="closeWaring()">Aceptar</button>
    </div>
  `,
})
export class WarningDialogComponent {

  constructor(public dialog: MatDialog) {

  }
  openWarningDialog(): void {
    this.dialog.open(WarningDialogComponent);
  }
  closeWaring(){
    this.dialog.closeAll()
  }
}
