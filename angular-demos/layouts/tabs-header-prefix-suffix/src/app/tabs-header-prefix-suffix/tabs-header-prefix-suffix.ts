import { Component } from '@angular/core';
import { IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent, IgxTabContentComponent } from 'igniteui-angular';


@Component({
    selector: 'app-tabs-header-prefix-suffix',
    templateUrl: './tabs-header-prefix-suffix.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent, IgxTabContentComponent]
})
export class TabsHeaderPrefixSuffixComponent {
    public tabs = [{
        image: 'https://staging.infragistics.com/angular-demos/assets/images/card/avatars/igLogo.png',
        header: 'Tab1',
        content: 'Content1'
    }, {
        image: 'https://staging.infragistics.com/angular-demos/assets/images/card/avatars/igLogo.png',
        header: 'Tab2',
        content: 'Content2'
    }, {
        image: 'https://staging.infragistics.com/angular-demos/assets/images/card/avatars/igLogo.png',
        header: 'Tab3',
        content: 'Content3'
    }];

    closeTab(index: number) {
        this.tabs.splice(index, 1);
    }
}
