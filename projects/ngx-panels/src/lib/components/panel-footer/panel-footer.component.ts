import { ChangeDetectionStrategy, Component, Input } from '@angular/core';



@Component({
    selector: 'ngx-panel-footer',
    templateUrl: './panel-footer.component.html',
    styleUrls: ['./panel-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelFooterComponent {
    @Input()
    autoPadding = true;
}
