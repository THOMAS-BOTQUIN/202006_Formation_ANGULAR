import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/shared/models/clients';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  private addSub : Subscription;

  constructor(
      private cs : ClientsService,
      private router : Router,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
  }

  public add(item: Client) {
    this.addSub = this.cs.add(item).subscribe((resp) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

  public ngOnDestroy() {
    if (this.addSub) {
      this.addSub.unsubscribe();
    }
  }
}
