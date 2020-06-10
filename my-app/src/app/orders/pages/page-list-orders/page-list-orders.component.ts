import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersService } from '../../services/orders.service'
import { Order } from 'src/app/shared/models/orders';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection : Order[];
  public headers: string[];
  public states = Object.values(StateOrder);

  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe((datas) => {
      this.collection = datas;
    });
    this.headers = [
      "Type Presta",
      "Nb Jours",
      "TVA",
      "TJM HT",
      "Client",
      "Comment",
      "ID",
      "Total HT",
      "Total TTC",
      "State"
    ];
   /*
    this.headers = [
      "tjmHT",
      "nbJours",
      "tva",
      "state",
      "typePresta",
      "client",
      "comment",
      "id"
    ];
    */
   /*
   this.headers = [
      { title: "Type Presta", property: "typePresta", currency: null},
      { title: "Client", property: "nbJours", currency: null},
      { title: "TVA", property: "tva", currency: null},
      { title: "TJM HT", property: "tjmHt", currency: "EUR"},
      { title: "State", property: "state", currency: null},
      { title: "Client", property: "client", currency: null},
      { title: "Comment", property: "comment", currency: null},
      { title: "ID", property: "id", currency: null}
    ];
    */
  }

  public changeState(item: Order, event){
    this.os.changeState(item, event.target.value).subscribe((result) => {
      item.state = result.state
    });
  }
}
