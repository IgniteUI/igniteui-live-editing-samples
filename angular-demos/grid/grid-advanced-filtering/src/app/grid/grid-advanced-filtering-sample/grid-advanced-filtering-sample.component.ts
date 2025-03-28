import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-advanced-filtering-sample',
    styleUrls: ['./grid-advanced-filtering-sample.component.scss'],
    templateUrl: 'grid-advanced-filtering-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective]
})
export class GridAdvancedFilteringSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatCurrency(val: string) {
        return '$' + parseInt(val, 10).toFixed(2);
    }
}
