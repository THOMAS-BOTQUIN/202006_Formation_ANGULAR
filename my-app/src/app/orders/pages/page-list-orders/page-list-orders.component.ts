import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersService } from '../../services/orders.service'
import { Order } from 'src/app/shared/models/orders';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnComponent } from 'src/app/shared/components/btn/btn.component';
import { BtnI, Btn } from 'src/app/shared/interfaces/btn-i';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection : Order[];
  public headers: string[];
  public states = Object.values(StateOrder);

  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;

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
