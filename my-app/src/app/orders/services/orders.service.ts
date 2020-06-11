import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/models/orders'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((datas) => {
        return datas.map((obj) => {
          return new Order(obj);
        })
      })
    );
  }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }
  set collection(coll: Observable<Order[]>) {
    this.pCollection = coll;
  }

  // update item
  private updateItem(item: Order) : Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }
  public changeState(item: Order, state: StateOrder) : Observable<Order> {
    // on clone l'objet, car même en cas de plantage http, on aurait mis à jour l'objet initial
    const obj = new Order({...item});
    obj.state = state;
    return this.updateItem(obj);
//    return this.http.put<Order>(`${this.urlApi}orders/${obj.id}`, obj);
  }

  // add item
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }

  // delete item

  // change state order

}
