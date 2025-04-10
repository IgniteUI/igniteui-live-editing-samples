import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, ISortingExpression, SortingDirection, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'app-grid-groupby-sample',
    styleUrls: ['./grid-groupby-styling.component.scss'],
    templateUrl: './grid-groupby-styling.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class GridGroupByStylingComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];

    constructor() {
        this.data = INVOICE_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: 'ShipCountry', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() },
            { dir: SortingDirection.Asc, fieldName: 'ShipCity', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];
    }
    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
