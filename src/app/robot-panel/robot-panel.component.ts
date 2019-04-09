import { Component, OnInit } from '@angular/core';
import { PanelRef, PanelService } from 'projects/ngx-panels/src/lib';
import { StatementPanelComponent } from '../statement-panel/statement-panel.component';

@Component({
    selector: 'robot-panel',
    templateUrl: './robot-panel.component.html',
    styleUrls: ['./robot-panel.component.scss']
})
export class RobotPanelComponent implements OnInit {

    name: string;

    avatar: string;
    statement: string;
    power: number;

    constructor(
        private readonly panelRef: PanelRef<any>,
        private readonly panelService: PanelService
    ) { }

    ngOnInit() {
        this.name = this.panelRef.data.name;
        this.avatar = this.panelRef.data.avatar;
        this.power = this.panelRef.data.power;
    }

    onClick() {
        this.panelRef.close();
    }

    onSpeak() {
        this.panelService.open(StatementPanelComponent, this.name);
    }

}
