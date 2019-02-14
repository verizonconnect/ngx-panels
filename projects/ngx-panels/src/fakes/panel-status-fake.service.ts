import { NEVER, Observable } from 'rxjs';

import { IPanelStatusService } from '../lib';


export class PanelStatusFakeService implements IPanelStatusService {
    increment: jasmine.Spy = jasmine.createSpy('increment');
    reset: jasmine.Spy = jasmine.createSpy('reset');
    notifyOpen: jasmine.Spy = jasmine.createSpy('notifyOpen');
    error: jasmine.Spy = jasmine.createSpy('error');
    panelOpen$: Observable<void> = NEVER;

    private open = false;
    get isOpen() {
        return this.open;
    }
    setIsOpen(isOpen: boolean) {
        this.open = isOpen;
    }
}
