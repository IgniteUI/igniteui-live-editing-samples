import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IgxTreeComponent, IgxLayoutDirective, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxTreeNodeComponent, IgxTreeNodeLinkDirective, IgxFlexDirective, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent } from 'igniteui-angular';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav-drawer-hierarchical',
    templateUrl: './nav-drawer-hierarchical.component.html',
    styleUrls: ['./nav-drawer-hierarchical.component.scss'],
    imports: [IgxLayoutDirective, IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxTreeComponent, IgxTreeNodeComponent, IgxTreeNodeLinkDirective, RouterLink, IgxFlexDirective, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent]
})
export class NavDrawerHierarchicalComponent implements AfterViewInit {
    @ViewChild('tree') public tree: IgxTreeComponent;

    public selectedContent = 'Home';

    public routes = [
        {
            path: 'grids', displayName: 'Grids',
            children: [
                { path: 'grid', displayName: 'Data Grid' },
                { path: 'tree-grid', displayName: 'Tree Grid' },
                { path: 'hierarchical-grid', displayName: 'Hierarchical Grid' },
                { path: 'pivot-grid', displayName: 'Pivot Grid' }
            ]
        },
        {
            path: 'charts', displayName: 'Charts',
            children: [
                { path: 'area-chart', displayName: 'Area Chart' },
                { path: 'bar-chart', displayName: 'Bar Chart' },
                { path: 'column-chart', displayName: 'Column Chart' },
                { path: 'pie-chart', displayName: 'Pie Chart' }
            ]
        },
        {
            path: 'interactions', displayName: 'Interactions',
            children: [
                { path: 'action-strip', displayName: 'Action Strip' },
                { path: 'dialog', displayName: 'Dialog' },
                { path: 'drag-drop', displayName: 'Drag and Drop' }
            ]
        },
        {
            path: 'layouts', displayName: 'Layouts',
            children: [
                { path: 'dock-manager', displayName: 'Dock Manager' },
                { path: 'expansion-panel', displayName: 'Exspansion Panel' },
                { path: 'layout', displayName: 'Layout Manager' }
            ]
        },
        {
            path: 'notifications', displayName: 'Notifications',
            children: [
                { path: 'banner', displayName: 'Banner' },
                { path: 'snackbar', displayName: 'Snackbar' },
                { path: 'toast', displayName: 'Toast' }
            ]
        }
    ]

    constructor() { }

    public ngAfterViewInit() {
        this.tree.activeNodeChanged.subscribe(node => {
            this.selectedContent = node.data;
        })
    }
}