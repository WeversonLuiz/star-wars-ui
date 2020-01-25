import { Injectable } from '@angular/core';
import { IgenericOperations } from '../generic/igeneric-operations';
import { Planets } from './planets';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IgenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService implements IgenericOperations<Planets, number>{

  pathBase = environment.URL_API + '/peoples';

  constructor(private http: HttpClient) { }

  post(data: Planets) {
    this.http.post(this.pathBase, data);
    console.log('Serviço chamado PlanetsService - método POST');
  }
  put(id?: number, data?: Planets) {
    this.http.put(this.pathBase + '/' + id, data);
    console.log('Serviço chamado PlanetsService - método PUT');
  }
  patch(id?: number, data?: Planets) {
    this.http.patch(this.pathBase + '/' + id, data);
    console.log('Serviço chamado PlanetsService - método PATCH');
  }
  get(): Observable<IgenericResource<Planets>> {
    console.log("Entrou dentro do serviço PlanetsService - método GET");
    return this.http.get<IgenericResource<Planets>>(this.pathBase);
  }
  getById(id?: number): Observable<Planets> {
    console.log("Entrou dentro do serviço PlanetsService - método GET/:ID");
    return this.http.get<Planets>(this.pathBase + '/' + id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço PlanetsService - método DELETE/:ID");
    this.http.delete(this.pathBase+"/"+id);
  }

}
