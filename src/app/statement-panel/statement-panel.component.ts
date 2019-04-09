import { Component, OnInit } from '@angular/core';
import { PanelRef } from 'projects/ngx-panels/src/lib';

@Component({
    selector: 'statement-panel',
    templateUrl: './statement-panel.component.html',
    styleUrls: ['./statement-panel.component.scss']
})
export class StatementPanelComponent implements OnInit {

    name: string;

    statement: string;

    constructor(
        private readonly panelRef: PanelRef<any>
    ) { }

    ngOnInit() {
        this.name = this.panelRef.data;
        this.statement = `Hi! I'm ${this.panelRef.data}. How can I help you?`;
    }

    onClick() {
        this.panelRef.close();
    }

}
