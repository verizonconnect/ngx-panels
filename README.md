# Angular Library Panel (ngx-panels)
### An Angular library for creating beautiful, dynamic side panels

## Demo

## Usage
`app.component.html`
```html
<button (click)="open()">Open Panel</button>
<ngx-panel-container></ngx-panel-container>
```

`app.component.ts`
```typescript
import { Component } from '@angular/core';
import { PanelService } from 'ngx-panels';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private readonly panelService: PanelService) { }

    open() {
        this.panelService.openAsRoot(TestComponent);
    }
}

```

## API




