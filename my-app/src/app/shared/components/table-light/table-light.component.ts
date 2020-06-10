import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/orders';
import { Header } from '../../models/table-light-header';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() headers: Header[];

  constructor() { }

  ngOnInit(): void {
  }

}
