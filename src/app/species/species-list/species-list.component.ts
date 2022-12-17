import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../species.service';
import { Species } from '../species';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  displayedColumns = ['name', 'classification', 'designation', 'language', 'homeworld'];
  dataSource = [];
  species: Species[]; // Lista de species

  constructor(private service: SpeciesService,) { }
  ngOnInit() {
    this.getAll();
    console.log("this.species", this.species);
  }

  //metodo que vai assinar a consulta(subscribe)
  //quando houver resultados os dados serão armazenados em um array
  getAll() {
    this.service.get().subscribe(species => {
      this.species = species.results;
      this.dataSource = this.species;
      console.log("this.species", this.species);
    },
      err => {
        //console.log(err);
      });
  }

}
