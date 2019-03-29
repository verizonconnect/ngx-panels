import { Component, OnInit } from '@angular/core';
import { PanelRef } from 'projects/ngx-panels/src/lib';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    name: string;

    avatar: string;
    statement: string;
    power: number;

    constructor(
        private readonly panelRef: PanelRef<any>
    ) { }

    ngOnInit() {
        this.name = this.panelRef.data.name;
        this.avatar = this.panelRef.data.avatar;
        this.power = this.panelRef.data.power;
        this.statement = `Hi! I'm ${this.name}. How can I help you?`;
    }

    onClick() {
        this.panelRef.close();
    }

    onSpeak() {
        alert(this.statement);
    }

}
