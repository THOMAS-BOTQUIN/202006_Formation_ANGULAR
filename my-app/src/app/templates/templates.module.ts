import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './components/template-a/template-a.component';
import { TemplateBComponent } from './components/template-b/template-b.component';
import { TemplateCComponent } from './components/template-c/template-c.component';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent, TemplateCComponent],
  imports: [
    CommonModule, TextModule
  ],
  exports: [
    TemplateAComponent, TemplateBComponent, TemplateCComponent
  ]
})
export class TemplatesModule { }
