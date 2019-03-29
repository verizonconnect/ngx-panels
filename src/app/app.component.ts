import { Component } from '@angular/core';
import { PanelService } from 'projects/ngx-panels/src/lib';
import { TestComponent } from './test/test.component';


export class Robot {
    name: string;
    avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        private readonly panelService: PanelService
    ) { }

    open() {
        this.panelService.openAsRoot(TestComponent, {
            name: 'Giovanni Pini',
            avatar: 'https://robohash.org/giovannipini',
            power: 4
        });
    }

}
