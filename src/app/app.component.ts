import { Component } from '@angular/core';
import { PanelService } from 'ngx-panels';

import { Robot } from './models/robot.model';
import { RobotPanelComponent } from './robot-panel/robot-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  robots: Robot[] = [
    { id: 1, name: 'Ufo Robot', avatar: 'https://robohash.org/uforobot', power: 3, statement: '' },
    { id: 2, name: 'Zoran Power', avatar: 'https://robohash.org/zoranpower', power: 4, statement: '' },
    { id: 3, name: 'Zin Jen', avatar: 'https://robohash.org/zinjen', power: 5, statement: '' },
    { id: 4, name: 'Mortadella', avatar: 'https://robohash.org/mortadella', power: 6, statement: '' },
    { id: 5, name: 'Paolo Bot', avatar: 'https://robohash.org/paolobot', power: 9, statement: '' }
  ];

    constructor(
        private readonly panelService: PanelService
    ) { }

    open(robot: Robot) {
        this.panelService.openAsRoot(RobotPanelComponent, robot);
    }
}
