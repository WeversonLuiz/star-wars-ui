import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { Planets } from '../planets';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  private Planets: Planets[]; // Lista de planets

  constructor(private service: PlanetsService,) { }
  ngOnInit() {
    this.getAll();
  }

  //metodo que vai assinar a consulta(subscribe)
  //quando houver resultados os dados serão armazenados em um array
  getAll(){
    this.service.get().subscribe(
      Planets => this.Planets = Planets.results,
      err => {
        //console.log(err);
      });
  }
}
