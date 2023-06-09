import { HighlightNumberDirective } from './highlight-number.directive';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDemoComponent } from './highlight-demo/highlight-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDemoComponent,
    HighlightNumberDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
