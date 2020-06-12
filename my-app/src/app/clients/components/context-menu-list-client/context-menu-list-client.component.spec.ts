import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuListClientComponent } from './context-menu-list-client.component';

describe('ContextMenuListClientComponent', () => {
  let component: ContextMenuListClientComponent;
  let fixture: ComponentFixture<ContextMenuListClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextMenuListClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
