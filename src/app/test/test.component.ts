import { Component } from '@angular/core';
import { PanelRef } from 'projects/ngx-panels/src/lib';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(
      private readonly panelRef: PanelRef<any>
  ) { }

  onClick() {
      this.panelRef.close();
  }

}
