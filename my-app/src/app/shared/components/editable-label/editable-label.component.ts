import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.scss']
})
export class EditableLabelComponent implements OnInit {
  @Input() item : any;
  @Input() fieldName : string;
  @Input() type : string;
  @Output() modify = new EventEmitter();

  private editingId: string;

  constructor() { }

  ngOnInit(): void {
  }

  public getFieldId(fieldName: string, item: any) : string {
    return fieldName + '-' + item.id;
  }
  public isEditing(fieldName: string, item: any) : boolean {
    return this.getFieldId(fieldName, item) == this.editingId;
  }

  public onClick(fieldName: string, event) {
    this.editingId = event.target.id;
  }

  public changeField(item: any, fieldName: string, event) {
    this.modify.emit({
      'item': item,
      'fieldName': fieldName,
      'event': event
    });
    this.editingId = null;
  }
}
