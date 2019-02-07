import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { PanelComponent, PanelContainerComponent, PanelModule } from 'projects/ngx-panels/src/lib';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, PanelModule, BrowserAnimationsModule],
  providers: [],
  entryComponents: [TestComponent, PanelComponent, PanelContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
