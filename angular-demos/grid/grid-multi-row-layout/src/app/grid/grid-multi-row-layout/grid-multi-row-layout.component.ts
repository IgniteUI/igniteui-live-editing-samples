import { Component, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection, IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnLayoutComponent, IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-multi-row-layout-sample',
    styleUrls: ['./grid-multi-row-layout.component.scss'],
    templateUrl: './grid-multi-row-layout.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnLayoutComponent, IgxColumnComponent]
})
export class GridMultiRowLayoutComponent {

    public sourceData = DATA;
    public group = [
        {
            dir: SortingDirection.Asc,
            fieldName: 'Country',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
    ];
    public sort = [
        {
            dir: SortingDirection.Desc,
            fieldName: 'CompanyName',
            ignoreCase: true
        }
    ];
}
