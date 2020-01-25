import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../species.service';
import { Species } from '../species';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  private species: Species[]; // Lista de species

  constructor(private service: SpeciesService,) { }
  ngOnInit() {
    this.getAll();
  }

  //metodo que vai assinar a consulta(subscribe)
  //quando houver resultados os dados serão armazenados em um array
  getAll(){
    this.service.get().subscribe(
      species => this.species = species.results,
      err => {
        //console.log(err);
      });
  }

}
