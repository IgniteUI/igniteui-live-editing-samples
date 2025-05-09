import { Component, OnInit } from '@angular/core';
import { IRowSelectionEventArgs, IgxTreeGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxRowSelectorDirective, IgxCheckboxComponent } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-conditional-row-selectors',
    styleUrls: ['./tree-grid-conditional-row-selectors.component.scss'],
    templateUrl: 'tree-grid-conditional-row-selectors.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowSelectorDirective, IgxCheckboxComponent]
})

export class TreeGridConditionalRowSelectorsSampleComponent implements OnInit {
    public employees: any[];
    public disabledCollection: string[] = [];

    public ngOnInit(): void {
        this.employees = generateEmployeeFlatData();
        this.disabledCollection = this.employees.filter(empl => empl.OnPTO === true).map(empl => empl.ID);
    }

    public isSelectionAllowed(newRowID: string) {
        return this.disabledCollection.indexOf(newRowID) === -1;
    }

    public onRowSelect(event: IRowSelectionEventArgs) {
        if (!event.added.length && event.removed.length) {
            // ignore deselect
            return;
        }
        const originalAddedLength = event.added.length;

        // update selection to contain only allowed rows
        event.newSelection = event.newSelection.filter(x => this.isSelectionAllowed(x.ID));

        // cleanup selection if all conditionally selectable rows are already selected
        if (event.newSelection.length
            && !event.newSelection.filter(x => event.oldSelection.indexOf(x) === -1).length
            && originalAddedLength > 1) {
                // all selected from header, deselect instead
                event.newSelection = [];
        }
    }
}
