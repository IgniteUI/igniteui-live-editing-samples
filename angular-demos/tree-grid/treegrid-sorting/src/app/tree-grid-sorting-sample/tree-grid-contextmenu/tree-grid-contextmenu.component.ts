import { Component, Input } from '@angular/core';
import { SortingDirection, IgxIconComponent } from 'igniteui-angular';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-tree-grid-contextmenu',
    styleUrls: ['./tree-grid-contextmenu.component.scss'],
    templateUrl: './tree-grid-contextmenu.component.html',
    imports: [NgStyle, IgxIconComponent]
})
export class TreeGridContextmenuComponent {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    constructor() { }

    public sort(eventArgs) {
        this.cell.grid.sort({fieldName: this.cell.column.field, dir: SortingDirection.Asc, ignoreCase: true});
    }

    public clearSort(eventArgs) {
        this.cell.grid.clearSort(this.cell.column.field);
    }

    public clearAll(eventArgs) {
        this.cell.grid.clearSort();
    }
}
