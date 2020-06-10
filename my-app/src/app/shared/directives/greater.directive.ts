import { Directive, OnChanges, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGreater]'
})
export class GreaterDirective implements OnChanges {
  @Input() appGreaterAttr: number;
  @Input() appGreaterSeuil: number;
  @HostBinding("class") nomClass : string;

  constructor() { }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appGreaterAttr, this.appGreaterSeuil);
  }

  private formatClass(courant : number, seuil : number) : string {
    if (courant >= seuil) {
      return "greater-error";
    }
    return "greater-success";
  }
}
