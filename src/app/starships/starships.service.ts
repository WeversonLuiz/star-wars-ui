import { Injectable } from '@angular/core';
import { IgenericOperations } from '../generic/igeneric-operations';
import { Starships } from './starships';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IgenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService implements IgenericOperations<Starships, number>{
  
  pathBase = environment.URL_API + '/peoples';

  constructor(private http: HttpClient) { }

  post(data: Starships) {
    this.http.post(this.pathBase, data);
    console.log('Serviço chamado StarshipsService - método POST');
  }
  put(id?: number, data?: Starships) {
    this.http.put(this.pathBase + '/' + id, data);
    console.log('Serviço chamado StarshipsService - método PUT');
  }
  patch(id?: number, data?: Starships) {
    this.http.patch(this.pathBase + '/' + id, data);
    console.log('Serviço chamado StarshipsService - método PATCH');
  }
  get(): Observable<IgenericResource<Starships>> {
    console.log("Entrou dentro do serviço StarshipsService - método GET");
    return this.http.get<IgenericResource<Starships>>(this.pathBase);
  }
  getById(id?: number): Observable<Starships> {
    console.log("Entrou dentro do serviço StarshipsService - método GET/:ID");
    return this.http.get<Starships>(this.pathBase + '/' + id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço StarshipsService - método DELETE/:ID");
    this.http.delete(this.pathBase+"/"+id);
  }

}
