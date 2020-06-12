import { StateOrder } from "../enums/state-order.enum";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI {
  tjmHt : number;
  nbJours : number;
  tva : number;
  state : StateOrder;
  typePresta: string;
  client: string;
  comment: string;
  id: number;

  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }

  totalTTC(): number {
    return this.totalHT() * (1 + this.tva / 100);
  }
}

