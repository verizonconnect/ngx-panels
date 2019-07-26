import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'ngx-panels';

import { AppComponent } from './app.component';
import { RobotPanelComponent } from './robot-panel/robot-panel.component';
import { StatementPanelComponent } from './statement-panel/statement-panel.component';
import { PanelSide } from 'projects/ngx-panels/src/lib/classes/config.class';

@NgModule({
  declarations: [AppComponent, RobotPanelComponent, StatementPanelComponent],
  imports: [BrowserModule,
    PanelModule.forRoot({ side: PanelSide.FLOATING, size: 600 }),
    BrowserAnimationsModule],
  providers: [],
  entryComponents: [RobotPanelComponent, StatementPanelComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
