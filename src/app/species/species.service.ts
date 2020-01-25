import { Injectable } from '@angular/core';
import { IgenericOperations } from '../generic/igeneric-operations';
import { Species } from './species';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IgenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService implements IgenericOperations<Species, number>{
  
  pathBase = environment.URL_API + '/peoples';

  constructor(private http: HttpClient) { }

  post(data: Species) {
    this.http.post(this.pathBase, data);
    console.log('Serviço chamado SpeciesService - método POST');
  }
  put(id?: number, data?: Species) {
    this.http.put(this.pathBase + '/' + id, data);
    console.log('Serviço chamado SpeciesService - método PUT');
  }
  patch(id?: number, data?: Species) {
    this.http.patch(this.pathBase + '/' + id, data);
    console.log('Serviço chamado SpeciesService - método PATCH');
  }
  get(): Observable<IgenericResource<Species>> {
    console.log("Entrou dentro do serviço SpeciesService - método GET");
    return this.http.get<IgenericResource<Species>>(this.pathBase);
  }
  getById(id?: number): Observable<Species> {
    console.log("Entrou dentro do serviço SpeciesService - método GET/:ID");
    return this.http.get<Species>(this.pathBase + '/' + id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço SpeciesService - método DELETE/:ID");
    this.http.delete(this.pathBase+"/"+id);
  }

}
