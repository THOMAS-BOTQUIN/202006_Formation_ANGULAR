import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './template-a/template-a.component';
import { TemplateBComponent } from './template-b/template-b.component';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent],
  imports: [
    CommonModule, TextModule
  ],
  exports: [
    TemplateAComponent, TemplateBComponent
  ]
})
export class TemplatesModule { }
