import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent, PanelContainerComponent, PanelModule } from 'ngx-panels';

import { AppComponent } from './app.component';
import { RobotPanelComponent } from './robot-panel/robot-panel.component';
import { StatementPanelComponent } from './statement-panel/statement-panel.component';

@NgModule({
  declarations: [AppComponent, RobotPanelComponent, StatementPanelComponent],
  imports: [BrowserModule, PanelModule, BrowserAnimationsModule],
  providers: [],
  entryComponents: [RobotPanelComponent, StatementPanelComponent, PanelComponent, PanelContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
