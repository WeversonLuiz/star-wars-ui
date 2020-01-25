import { Observable } from 'rxjs';
import { IgenericResource } from './igeneric-resource';

export interface IgenericOperations<T, N>{
    post(data: T);
    put(id?: N, data?: T);
    patch(id?: N, data?: T);
    get(): Observable<IgenericResource<T>>;
    getById(id?: N): Observable<T>;
    delete(id?: N);
}
