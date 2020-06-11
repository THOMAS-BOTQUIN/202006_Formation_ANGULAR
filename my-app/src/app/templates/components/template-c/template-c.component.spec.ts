import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCComponent } from './template-c.component';

describe('TemplateCComponent', () => {
  let component: TemplateCComponent;
  let fixture: ComponentFixture<TemplateCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
