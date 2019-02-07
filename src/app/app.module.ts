import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPanelsModule } from 'ngx-panels';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { PanelComponent, PanelContainerComponent, SidePanelModule } from 'projects/ngx-panels/src/lib';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, NgxPanelsModule, SidePanelModule, BrowserAnimationsModule],
  providers: [],
  entryComponents: [TestComponent, PanelComponent, PanelContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
