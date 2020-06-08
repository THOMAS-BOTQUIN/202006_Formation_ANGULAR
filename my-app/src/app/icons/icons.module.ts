import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconTrashComponent } from './components/icon-trash/icon-trash.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';


@NgModule({
  declarations: [IconEditComponent, IconTrashComponent, IconNavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconTrashComponent, IconNavComponent, IconEditComponent
  ]
})
export class IconsModule { }
