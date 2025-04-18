import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxGridComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxBadgeComponent } from 'igniteui-angular';
import { DATA } from '../../data/financialData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-moving-styled-sample',
    styleUrls: ['./grid-moving-styled-sample.component.scss'],
    templateUrl: './grid-moving-styled-sample.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxBadgeComponent]
})

export class GridMovingStyledSampleComponent {
    @ViewChild('dataGrid', { static: true }) public grid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public toggleColumnPinning(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
    }
}
