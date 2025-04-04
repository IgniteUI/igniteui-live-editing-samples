import { Component, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxRippleDirective, IgxIconComponent, IgxIconButtonDirective, IgxToggleActionDirective } from 'igniteui-angular';


@Component({
    selector: 'app-nav-drawer-simple',
    styleUrls: ['./nav-drawer-simple.component.scss'],
    templateUrl: './nav-drawer-simple.component.html',
    imports: [IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxRippleDirective, IgxIconComponent, IgxIconButtonDirective, IgxToggleActionDirective]
})
export class NavDrawerSimpleComponent  {
    @ViewChild(IgxNavigationDrawerComponent, { static: true })
    public drawer: IgxNavigationDrawerComponent;

    public navItems = [
        { name: 'account_circle', text: 'Avatar' },
        { name: 'error', text: 'Badge' },
        { name: 'group_work', text: 'Button Group' }
    ];

    public selected = 'Avatar';

    public navigate(item) {
        this.selected = item.text;
        this.drawer.close();
    }
}
