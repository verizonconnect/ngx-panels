import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPanelsModule } from 'ngx-panels';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPanelsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
