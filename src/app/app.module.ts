import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JsComponent } from './js/js.component';


@NgModule({
  declarations: [
    AppComponent,
    CssComponent,
    HtmlComponent,
    JsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
