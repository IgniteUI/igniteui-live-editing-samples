import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, TreeGridFilteringStrategy, IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';

import { IgxPreventDocumentScrollDirective } from '../directives/prevent-scroll.directive';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-tree-grid-tree-filter-view',
    styleUrls: ['./tree-grid-tree-filter-view.component.scss'],
    templateUrl: 'tree-grid-tree-filter-view.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxGridExcelStyleFilteringComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

export class TreeGridTreeFilterViewComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];
    public filterStrategy = new TreeGridFilteringStrategy(['Name']);

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }
}
