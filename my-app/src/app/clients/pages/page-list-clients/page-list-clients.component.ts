import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/clients';
import { Btn } from 'src/app/shared/interfaces/btn-i';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection : Client[];
  public headers: string[];
  public states = Object.values(StateClient);

  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;

  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.cs.collection.subscribe((datas) => {
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
    this.btnRoute = {
      label: "Add a client",
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

  public openPopUp() {
    console.log("Open popup");
  }

  public changeState(item : Client, event) {
    this.cs.changeState(item, event.target.value).subscribe((result) => {
      item.state = result.state;
    });
  }
}
