[![npm version](https://badge.fury.io/js/%40verizon%2Fngx-panels.svg)](https://badge.fury.io/js/%40verizon%2Fngx-panels)

# Angular Panel Library (ngx-panels)
### An [Angular](https://angular.io/) library for creating beautiful, dynamic panels

### Demo
Try out the [DEMO](https://verizonconnect.github.io/ngx-panels/)!

![alt text](https://github.com/verizonconnect/ngx-panels/blob/master/docs/panel-demo.gif)

## Install
An npm package is available: 
```
npm install @verizon/ngx-panels
```

## Usage

### Quick start
Import `PanelModule.forRoot()` in the module that hosts the panel container. Every other module con import it with just `PanelModule` (without `forRoot` call).
As extra steps you need to import `BrowserAnimationsModule` and define as entryComponents any components that will be hosted inside the panels, such as `SampleComponent` in this example.

`app.module.ts`
```typescript
@NgModule({
    declarations: [AppComponent, SampleComponent],
    imports: [BrowserModule, BrowserAnimationsModule, PanelModule.forRoot()],
    providers: [],
    entryComponents: [SampleComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

In the HTML just use `ngx-panel-container` element. This will be the holder of all the panels.

`app.component.html`
```html
<!-- your app -->
<ngx-panel-container></ngx-panel-container>
```

You should place this container inside an HTML element which has some space in it.

Whenever you need, open a Panel using the panel service. You can do this in every part of your Angular application by injecting the service.

`app.component.ts`
```typescript
// ...
export class AppComponent {
    constructor(private readonly panelService: PanelService) { }

    yourFunction() {
        this.panelService.open(SampleComponent);
    }
}
```

### Stacking panels
You can either open a panel on top of the previously opened ones (if any), stacking them
```typescript
    this.panelService.open(SampleComponent);
    // Open a second panel on top of the first one
    this.panelService.open(AnotherSampleComponent);
```

or you can open one replacing all the others, as "root"
```typescript
    // Remove all previous panels and open a new one
    this.panelService.openAsRoot(SampleComponent);
```

### Panel content
You can prepare any Angular Component to fill the panel content, but there are some sub-components that you can conveniently use to construct the panel.
```html
<ngx-panel-header> Angular HTML content for header </ngx-panel-header>
<ngx-panel-body> Angular HTML content for body </ngx-panel-body>
<ngx-panel-footer> Angular HTML content for footer </ngx-panel-footer>
```
The header component already provides a close button.

### Programmatically close a panel
Inside the hosted component you can access the panel reference `PanelRef`, that can be used to close and perform other actions programmatically.
```typescript
// ...
export class SampleComponent {
    constructor(private readonly panelRef: PanelRef<any>) { }

    // Close programmatically whenever you want with the PanelRef instance
    yourFunction() {
        this.panelRef.close();
    }
}
```

### Set initial data
When you open a panel you can send custom data that can be used as initial seed for the panel content.
```typescript
    this.panelService.open(SampleComponent, 'Hello world'); // openAsRoot offers the same possibility
```
This data can be retrieved inside the transcluded (`SampleComponent`) component.
```typescript
/// ...
export class SampleComponent {
    constructor(private readonly panelRef: PanelRef<string>) { }

    ngOnInit() {
        // Data can be accessed anywhere in the component
        console.log(this.panelRef.data); // Prints 'Hello world'
    }
}
```
