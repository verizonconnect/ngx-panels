import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



export interface IPanelStatusService {
    isOpen: boolean;
    panelOpen$: Observable<void>;
    increment();
    reset();
    notifyOpen();
}

@Injectable()
export class PanelStatusService implements IPanelStatusService {
    private size = 0;

    readonly panelOpenSubject: Subject<void> = new Subject<void>();

    // this method must not be called manually
    increment() {
        this.size += 1;
    }

    // this method must not be called manually
    reset() {
        this.size = 0;
    }

    // this method must not be called manually
    notifyOpen() {
        this.panelOpenSubject.next();
    }

    get isOpen() {
        return this.size > 0;
    }

    get panelOpen$() {
        return this.panelOpenSubject.asObservable();
    }
}
