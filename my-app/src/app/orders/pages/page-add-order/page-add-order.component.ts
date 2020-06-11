import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/orders';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit, OnDestroy {
  public title: string;
  public subtitle: string;
  public addSub: Subscription;

  constructor(private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "Add an order";
  }

  public add(item: Order) {
    console.log(item);
    this.addSub = this.os.add(item).subscribe((result) => {
//      this.router.navigate(['orders']);
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

  public ngOnDestroy() {
    if (this.addSub) {
      this.addSub.unsubscribe();
    }
  }
}
