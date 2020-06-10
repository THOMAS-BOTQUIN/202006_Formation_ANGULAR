import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';
import { TextModule } from './text/text.module';
import { IconsModule } from './icons/icons.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, "fr-FR");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    LoginModule,
    TextModule,
    IconsModule,
    CoreModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "fr-FR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
