import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type } from '@angular/core';

import { PanelRef } from '../classes/panel-ref.class';
import { PanelContainerComponent } from '../components/panel-container/panel-container.component';
import { PanelComponent } from '../components/panel/panel.component';
import { IPanelComponent } from '../components/panel/panel.interface';
import { PanelStatusService } from './panel-status.service';



export interface IPanelService {
    setContainer(panelContainer: PanelContainerComponent);
    openAsRoot<Content, Data>(content: Type<Content>, data?: Data): PanelRef<Data>;
    closeAll();
    open<Content, Data>(content: Type<Content>, data?: Data): PanelRef<Data>;
}

@Injectable()
export class PanelService implements IPanelService {
    private panelContainer: PanelContainerComponent;

    constructor(
        private readonly injector: Injector,
        private readonly resolver: ComponentFactoryResolver,
        private readonly panelStatusService: PanelStatusService
    ) {}

    // this method must not be called manually
    setContainer(panelContainer: PanelContainerComponent) {
        this.panelContainer = panelContainer;
    }

    openAsRoot<Content, Data>(content: Type<Content>, data?: Data): PanelRef<Data> {
        this.closeAll();
        this.panelStatusService.reset();
        this.panelStatusService.increment();
        const panelRef: PanelRef<Data> = this.appendPanel(PanelComponent, content, data);
        this.panelStatusService.notifyOpen();
        return panelRef;
    }

    closeAll() {
        this.panelStatusService.reset();
        this.panelContainer.destroyAll();
    }

    open<Content, Data>(content: Type<Content>, data?: Data): PanelRef<Data> {
        this.panelStatusService.increment();
        const panelRef: PanelRef<Data> = this.appendPanel(PanelComponent, content, data);
        if (!this.panelStatusService.isOpen) {
            this.panelStatusService.notifyOpen();
        }
        return panelRef;
    }

    private appendPanel<Panel extends IPanelComponent, Content, Data>(
        panel: Type<Panel>,
        content: Type<Content>,
        data: Data
    ): PanelRef<Data> {
        // PanelRef is added to the injector so that the Body and the Header can access to it
        // (mainly for calling close action)
        const panelRef: PanelRef<Data> = new PanelRef<Data>();
        const childInjector: Injector = Injector.create({
            providers: [{ provide: PanelRef, useValue: panelRef }],
            parent: this.injector
        });

        const contentFactory: ComponentFactory<Content> = this.resolver.resolveComponentFactory(content);
        const contentComponentRef: ComponentRef<Content> = contentFactory.create(childInjector);

        const panelComponentFactory: ComponentFactory<Panel> = this.resolver.resolveComponentFactory(panel);
        const panelComponentRef: ComponentRef<Panel> = panelComponentFactory.create(this.injector);

        panelRef.setComponents(panelComponentRef, this.panelContainer);

        panelComponentRef.instance.panelCloseAnimationEnd.subscribe(() => {
            this.panelContainer.destroyTopPanel();
        });

        if (data) {
            panelRef.setData(data);
        }
        panelComponentRef.instance.contentContainer.insert(contentComponentRef.hostView);

        this.panelContainer.addTopPanel(panelRef);

        return panelRef;
    }
}
