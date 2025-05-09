import { Component } from '@angular/core';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective, IgxTextSelectionDirective, IgxSnackbarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-mask-sample-1',
    styleUrls: ['./mask-sample-1.component.scss'],
    templateUrl: './mask-sample-1.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective, IgxTextSelectionDirective, IgxSnackbarComponent]
})

export class MaskSample1Component {
    public validateDate(dateInput, snackbar) {
        if (!this.isDateValid(dateInput.value)) {
            this.notify(snackbar, 'Invalid Date', dateInput);
        }
    }

    private isDateValid(date) {
        return (new Date(date).toLocaleString() !== 'Invalid Date');
    }

    private notify(snackbar, message, input) {
        snackbar.open(message);
    }
}
