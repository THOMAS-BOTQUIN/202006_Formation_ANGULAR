import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { GreaterDirective } from './directives/greater.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { RouterModule } from '@angular/router';
import { ActiveDirective } from './directives/active.directive';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, GreaterDirective, TableDarkComponent, ActiveDirective],
  imports: [
    CommonModule, RouterModule, TemplatesModule, TextModule
  ],
  exports: [
    TableLightComponent, BtnComponent, TotalPipe, StateDirective, GreaterDirective, TableDarkComponent, ActiveDirective, TemplatesModule, TextModule
  ]
})
export class SharedModule { }
