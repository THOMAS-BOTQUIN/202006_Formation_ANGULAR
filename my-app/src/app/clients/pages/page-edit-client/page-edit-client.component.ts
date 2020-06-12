import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Client } from 'src/app/shared/models/clients';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  private editSub : Subscription;
  public item$: Observable<Client>;

  constructor(
    private cs : ClientsService,
    private router : Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cs.get(params.get('id')))
    );
  }

  public edit(item: Client) {
    this.editSub = this.cs.updateItem(item).subscribe((resp) => {
      this.router.navigate(['../../'], {relativeTo: this.route});
    });
  }

  public ngOnDestroy() {
    if (this.editSub) {
      this.editSub.unsubscribe();
    }
  }
}
