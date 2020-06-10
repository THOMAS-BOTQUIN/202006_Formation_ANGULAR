import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { GreaterDirective } from './directives/greater.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, GreaterDirective, TableDarkComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent, BtnComponent, TotalPipe, StateDirective, GreaterDirective, TableDarkComponent
  ]
})
export class SharedModule { }
