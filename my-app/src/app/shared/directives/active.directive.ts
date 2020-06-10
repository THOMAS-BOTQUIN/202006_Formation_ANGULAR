import { Directive, Input, HostBinding, ɵɵNgOnChangesFeature, OnChanges } from '@angular/core';
import { StateClient } from '../enums/state-client.enum';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {
  @Input() appActiveState : string;
  @HostBinding("class") nomClasse : string;

  constructor() { }

  ngOnChanges() {
    this.nomClasse = this.formatClasse(this.appActiveState);
  }


  public formatClasse(activeState : string) : string {
    return (activeState != StateClient.INACTIVE) ? "class-active" : "class-inactive";
  }
}
