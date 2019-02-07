import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent, PanelContainerComponent, PanelModule } from 'ngx-panels';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, PanelModule, BrowserAnimationsModule],
  providers: [],
  entryComponents: [TestComponent, PanelComponent, PanelContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
