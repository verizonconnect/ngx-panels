// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { TestBed } from '@angular/core/testing';

import { PanelStatusService as PanelStatusService } from './panel-status.service';

describe('PanelStatusService', () => {
    let service: PanelStatusService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PanelStatusService]
        });

        service = TestBed.get(PanelStatusService);
    });

    describe('panelOpen$', () => {
        it('should not emit if nothing happens', () => {
            let emitted = false;
            service.panelOpen$.subscribe(() => {
                emitted = true;
            });
            expect(emitted).toBe(false);
        });

        it('should emit if notifyOpen is called', () => {
            let emitted = false;
            service.panelOpen$.subscribe(() => {
                emitted = true;
            });
            service.notifyOpen();
            expect(emitted).toBe(true);
        });

        it('should emit twice if notifyOpen is called twice', () => {
            const emitted = [];
            service.panelOpen$.subscribe(() => {
                emitted.push(true);
            });
            service.notifyOpen();
            service.notifyOpen();
            expect(emitted.length).toBe(2);
        });
    });

    describe('isOpen', () => {
        it('should set initial state as closed', () => {
            expect(service.isOpen).toBe(false);
        });

        describe('increment', () => {
            it('should set state as open after first increment', () => {
                service.increment();
                expect(service.isOpen).toBe(true);
            });

            it('should set state as open after second increment', () => {
                service.increment();
                service.increment();
                expect(service.isOpen).toBe(true);
            });
        });

        describe('reset', () => {
            it('should set state as closed after just one reset', () => {
                service.reset();
                expect(service.isOpen).toBe(false);
            });

            it('should set state as closed after several increments and one reset', () => {
                service.increment();
                service.increment();
                service.increment();
                service.reset();
                expect(service.isOpen).toBe(false);
            });
        });
    });
});
