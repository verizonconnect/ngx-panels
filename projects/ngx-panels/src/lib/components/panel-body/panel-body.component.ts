import { ChangeDetectionStrategy, Component, Input } from '@angular/core';



@Component({
    selector: 'ngx-panel-body',
    templateUrl: './panel-body.component.html',
    styleUrls: ['./panel-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelBodyComponent {
    @Input()
    autoPadding = true;
}
