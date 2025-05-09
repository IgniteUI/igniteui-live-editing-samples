import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxButtonGroupComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-1',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-1.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-1.component.html',
    imports: [IgxButtonGroupComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridExcelStyleFilteringSample1Component implements OnInit {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    public size = 'large';
    public sizes: any[];

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];
    }

    public formatter = (a) => a;

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event) {
        this.size = this.sizes[event.index].label;
        this.hierarchicalGrid.reflow();
    }
}
