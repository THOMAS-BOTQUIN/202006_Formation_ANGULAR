import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-c',
  templateUrl: './template-c.component.html',
  styleUrls: ['./template-c.component.scss']
})
export class TemplateCComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
