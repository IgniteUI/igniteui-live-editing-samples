import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxTreeGridComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxPaginatorComponent, IgxColumnComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-column-moving-sample',
    styleUrls: ['./tree-grid-column-moving-sample.component.scss'],
    templateUrl: './tree-grid-column-moving-sample.component.html',
    imports: [IgxCellHeaderTemplateDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent]
})
export class TreeGridColumnMovingSampleComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public toggleColumnPinning(column: ColumnType) {
        column.pinned ? column.unpin() : column.pin();
    }
}
