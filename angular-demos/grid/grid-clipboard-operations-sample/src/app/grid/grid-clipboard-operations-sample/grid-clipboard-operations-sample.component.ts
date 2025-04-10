import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxGridComponent, IgxGridToolbarComponent, IgxSwitchComponent, IgxButtonDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-clipboard-operations-sample',
    styleUrls: ['grid-clipboard-operations-sample.component.scss'],
    templateUrl: './grid-clipboard-operations-sample.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxSwitchComponent, IgxButtonDirective]
})
export class GridClipboardSampleComponent {
    public data: any[];
    public options = {
        enabled: true,
        copyHeaders: true,
        copyFormatters: true,
        separator: '\t'
    };

    constructor() {
        this.data = DATA;
    }

    public formatter = (value: any) => `** ${value} **`;

    public initColumn(column) {
        column.formatter = this.formatter;
        column.header = `🎉${column.field}`;
        if (column.index > 6) {
            column.hidden = true;
        }
    }
}
