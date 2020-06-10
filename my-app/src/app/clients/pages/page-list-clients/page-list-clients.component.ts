import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/clients';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection : Client[];
  public headers: string[];

  constructor(private os: ClientsService) { }

  ngOnInit(): void {
    this.os.collection.subscribe((datas) => {
      this.collection = datas;
    });
    this.headers = [
      "State",
      "TVA",
      "ID",
      "Name",
      "CA",
      "Comment"
    ];
    /*
    this.headers = [
      { title: "State", property: "state", currency: null },
      { title: "TVA", property: "tva", currency: null },
      { title: "ID", property: "id", currency: null },
      { title: "Name", property: "name", currency: null },
      { title: "CA", property: "ca", currency: "EUR" },
      { title: "Comment", property: "comment", currency: null }
    ];
*/

  }

}
