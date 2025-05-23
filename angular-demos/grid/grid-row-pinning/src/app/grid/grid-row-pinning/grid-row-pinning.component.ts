import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IPinningConfig, RowPinningPosition, IgxSwitchComponent, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxGridEditingActionsComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-row-pinning',
    templateUrl: 'grid-row-pinning.component.html',
    styleUrls: ['./grid-row-pinning.component.scss'],
    imports: [IgxSwitchComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxGridEditingActionsComponent]
})

export class GridRowPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid: IgxGridComponent;
    public data: any[];

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top };

    constructor() {
        this.data = DATA;
    }

    public ngOnInit() {
        this.grid.pinRow(this.data[0].ID);
        this.grid.pinRow(this.data[3].ID);
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}
