// Copyright © 2018. Verizon Connect Ireland Limited. All rights reserved.

import { IPanelService } from "../lib";

export class PanelFakeService implements IPanelService {
    setContainer: jasmine.Spy = jasmine.createSpy('setContainer');
    openAsRoot: jasmine.Spy = jasmine.createSpy('openAsRoot');
    closeAll: jasmine.Spy = jasmine.createSpy('closeAll');
    open: jasmine.Spy = jasmine.createSpy('open');
}
