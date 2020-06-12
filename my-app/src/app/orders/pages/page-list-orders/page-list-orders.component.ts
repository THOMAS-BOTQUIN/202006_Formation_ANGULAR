import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { OrdersService } from '../../services/orders.service'
import { Order } from 'src/app/shared/models/orders';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn-i';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Subject<Order[]> = new Subject();
  // public collection : Order[];
  public headers: string[];
  public states = Object.values(StateOrder);

  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;

  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    // this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.os.collection.subscribe((result) => {
      this.collection$.next(result);
    }); // utilisation du pipe async afin de gérer les (un-)subscribe
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
    this.btnRoute = {
      label: "Add an order",
      route: "add"
    }
    this.btnHref = {
      label: "Go to Qwant",
      href: "http://qwant.fr"
    }
    this.btnAction = {
      label: "Open dialog",
      action: true
    }
  }

  public changeState(item: Order, event){
    this.os.changeState(item, event.target.value).subscribe((result) => {
      item.state = result.state
    });
  }

  public openPopUp() {
    console.log("Open popup");
  }
}
