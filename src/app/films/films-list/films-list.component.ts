import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { Films } from '../films';
import { DialogDetailsComponent } from 'src/app/shared-module/dialog-details/dialog-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  //films: [];
  private films: Films[]; // Lista de filmes

  constructor(
    private service: FilmsService,
    public dialog: MatDialog) { }
  //images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit() {
    this.getAll();
  }

  //metodo que vai assinar a consulta(subscribe)
  //quando houver resultados os dados serão armazenados em um array
  getAll() {
    this.service.get().subscribe(
      films => this.films = films.results,
      err => {
        //console.log(err);
      });
  }

  openDialog(film: Films): void {
    this.dialog.open(DialogDetailsComponent, {
      data: {
        titulo: 'Detalhes do filme',
        subTitulo: 'Características',
        descricao1: film.producer,
        descricao2: film.director,
        texto: film.opening_crawl,
      },
    });
  }

}
