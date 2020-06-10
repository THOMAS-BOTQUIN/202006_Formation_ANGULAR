import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/shared/models/clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Client(obj);
        })
      })
    );
  }

  get collection(): Observable<Client[]> {
    return this.pCollection;
  }
  set collection(coll: Observable<Client[]>) {
    this.pCollection = coll;
  }

  private updateItem(item: Client) : Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }

  public changeState(item: Client, value: StateClient) : Observable<Client> {
    const obj = new Client({...item});
    obj.state = value;
    return this.updateItem(obj);
  }
}
