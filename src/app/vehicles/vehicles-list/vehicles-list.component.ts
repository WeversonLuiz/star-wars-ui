import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Vehicles } from '../vehicles';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  private vehicles: Vehicles[]; // Lista de planets

  constructor(private service: VehiclesService,) { }
  ngOnInit() {
    this.getAll();
  }

  //metodo que vai assinar a consulta(subscribe)
  //quando houver resultados os dados serão armazenados em um array
  getAll(){
    this.service.get().subscribe(
      vehicles => this.vehicles = vehicles.results,
      err => {
        //console.log(err);
      });
  }

}
