import { Component } from '@angular/core';
import { PanelService } from 'projects/ngx-panels/src/lib';

import { Hero } from './models/hero.model';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  robots: Hero[] = [
    { id: 1, name: 'Ufo Robot', avatar: '', power: 1, statement: '' },
    { id: 2, name: 'Zoran Power', avatar: '', power: 1, statement: '' },
    { id: 3, name: 'Zin Jen', avatar: '', power: 1, statement: '' },
    { id: 4, name: 'Mortadella', avatar: '', power: 1, statement: '' },
    { id: 5, name: 'Paolo Bot', avatar: '', power: 1, statement: '' }
  ];

  constructor(private readonly panelService: PanelService) {}

  open() {
    this.panelService.openAsRoot(TestComponent);
  }
}
