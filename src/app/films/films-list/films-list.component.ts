import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { Films } from '../films';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  //films: [];
  private films: Films[]; // Lista de filmes

  constructor(private service: FilmsService,) { }
  //images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit() {
    this.getAll();
  }

  //metodo que vai assinar a consulta(subscribe)
  //quando houver resultados os dados serão armazenados em um array
  getAll(){
    this.service.get().subscribe(
      films => this.films = films.results,
      err => {
        //console.log(err);
      });
  }

}
