
export enum PanelSide {
    RIGHT = 'right',
    LEFT = 'left',
    TOP = 'top',
    BOTTOM = 'bottom',
    FLOATING = 'floating',
}

export interface PanelConfig {
    side: PanelSide;
    size: number;
}

export class DefaultPanelConfig implements PanelConfig {
    side: PanelSide.RIGHT;
    size: 320;
}
