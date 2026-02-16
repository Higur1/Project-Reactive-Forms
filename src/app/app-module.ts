import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { AngularMaterialModule } from './angular-material/angular-material-module';
import { ComponentsModule } from './components/components-module';
import { HttpClientModule } from '@angular/common/http';

import localPt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localPt, 'pt-BR');

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ComponentsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
