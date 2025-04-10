import { Component } from '@angular/core';
import { IgxToastComponent, VerticalAlignment, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-toast-sample-1',
    styleUrls: ['./toast-sample-1.component.scss'],
    templateUrl: './toast-sample-1.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxToastComponent]
})
export class ToastSample1Component {
    public toast: IgxToastComponent;
    public position = VerticalAlignment;

    openToast(toast: IgxToastComponent, pos: VerticalAlignment) {
        toast.positionSettings.verticalDirection = pos;
        toast.open();
    }
}
