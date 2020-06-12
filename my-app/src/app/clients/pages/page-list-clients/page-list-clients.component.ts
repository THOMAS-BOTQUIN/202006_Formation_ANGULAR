import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/clients';
import { Btn } from 'src/app/shared/interfaces/btn-i';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$ : Subject<Client[]> = new Subject();
  private collectionSubject = new Subject();

//  public collection : Client[];
  public headers: string[];
  public states = Object.values(StateClient);

  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;

  editingId: string;

  constructor(
    private cs: ClientsService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.cs.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.cs.collection.subscribe((col) => {
      this.collection$.next(col);
    });
    // utilisation du "pipe async" dans le html afin de gérer les (un-)subscribe

    this.headers = [
      "ID",
      "State",
      "TVA",
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

  public onRightClick(item: Client, event) {
    event.preventDefault();
    this.cs.delete(item).subscribe((result) => {
      this.cs.collection.subscribe((col) => {
        this.collection$.next(col);
      })
    })
  }

  public getFieldId(item: Client, fieldName: string) : string {
    return 'clients-' + fieldName + '-' + item.id;
  }
  public isEditing(item: Client, fieldName: string) : boolean {
    return this.getFieldId(item, fieldName) == this.editingId;
  }

  public onClick(item: Client, event) {
    this.editingId = event.target.id;
  }

  public onDblClick(item: Client, event) {
    this.router.navigate(['edit/'+ item.id], {relativeTo: this.route});
  }

  public changeTva(item : Client, event) {
    console.log("changeTva");
    this.cs.changeTva(item, event.target.value).subscribe((result) => {
      console.log("tva", event.target.value);
      this.cs.collection.subscribe((col) => {
        this.collection$.next(col);
        this.editingId = null;
      })
    });
  }

  public changeField(item: Client, fieldName: string, event) {
    const obj = new Client({...item});
    obj[fieldName] = event.target.value;
    this.editingId = null;
    this.cs.updateItem(obj).subscribe((result) => {
      this.cs.collection.subscribe((col) => {
        this.collection$.next(col);
      })
    });
  }
}
