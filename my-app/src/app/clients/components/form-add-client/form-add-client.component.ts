import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/clients';

@Component({
  selector: 'app-form-add-client',
  templateUrl: './form-add-client.component.html',
  styleUrls: ['./form-add-client.component.scss']
})
export class FormAddClientComponent implements OnInit {
  @Input() item = new Client();
  @Output() clicked = new EventEmitter();

  public states = Object.values(StateClient);
  public form : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      state : [this.item.state],
      tva: [this.item.tva, Validators.compose([Validators.required, Validators.min(0)])],
      id: [this.item.id],
      name: [this.item.name, Validators.required],
      ca: [this.item.ca],
      comment: [this.item.comment]
    });
  }

  public onSubmit() {
    this.clicked.emit(this.form.value);
  }
}
