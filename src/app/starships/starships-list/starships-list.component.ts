import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../starships.service';
import { Starships } from '../starships';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  private starships: Starships[]; // Lista de planets

  constructor(private service: StarshipsService,) { }
  ngOnInit() {
    this.getAll();
  }

  //metodo que vai assinar a consulta(subscribe)
  //quando houver resultados os dados serão armazenados em um array
  getAll(){
    this.service.get().subscribe(
      starships => this.starships = starships.results,
      err => {
        //console.log(err);
      });
  }

}
