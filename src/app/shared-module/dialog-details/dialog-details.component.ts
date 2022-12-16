import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  titulo: '';
  subTitulo: '';
  descricao1: '';
  descricao2: '';
  texto: '';
}

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.css']
})
export class DialogDetailsComponent  {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
