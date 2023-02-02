import { ComponentRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { PanelContainerComponent } from '../components/panel-container/panel-container.component';
import { IPanelComponent } from '../components/panel/panel.interface';

export interface IPanelRef<Data> {
    readonly closeEnabled$: Observable<boolean>;
    readonly data: Data;
    readonly panelComponentRef: ComponentRef<IPanelComponent>;
    onBeforeClose: () => boolean;
    setComponents(panelComponentRef: ComponentRef<IPanelComponent>, panelContainer: PanelContainerComponent);
    enableClose(canClose: boolean);
    close();
    setData(data: Data);
}

export class PanelRef<Data> implements IPanelRef<Data> {
    private panelCmpRef: ComponentRef<IPanelComponent>;
    private panelContainer: PanelContainerComponent;
    private panelData: Data;

    public guestComponent: any;

    private closeEnabledSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);

    onBeforeClose = () => true;

    setComponents(panelComponentRef: ComponentRef<IPanelComponent>, panelContainer: PanelContainerComponent) {
        this.panelCmpRef = panelComponentRef;
        this.panelContainer = panelContainer;
    }

    enableClose(canClose: boolean) {
        this.closeEnabledSubject.next(canClose);
    }

    close() {
        if (this.closeEnabledSubject.getValue()) {
            const continueClose = this.onBeforeClose();
            if (continueClose) {
                this.panelContainer.startClosingAnimation();
            }
        }
    }

    get closeEnabled$(): Observable<boolean> {
        return this.closeEnabledSubject.asObservable();
    }

    setData(data: Data) {
        this.panelData = data;
    }

    get data(): Data {
        return this.panelData;
    }

    get panelComponentRef(): ComponentRef<IPanelComponent> {
        return this.panelCmpRef;
    }
}
