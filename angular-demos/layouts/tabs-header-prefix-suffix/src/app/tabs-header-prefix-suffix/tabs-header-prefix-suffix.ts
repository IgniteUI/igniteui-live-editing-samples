import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-header-prefix-suffix',
    templateUrl: './tabs-header-prefix-suffix.html'
})
export class TabsHeaderPrefixSuffixComponent {
    public tabs = [{
        image: 'https://www.infragistics.com/angular-demos/assets/images/card/avatars/igLogo.png',
        header: 'Tab1',
        content: 'Content1'
    }, {
        image: 'https://www.infragistics.com/angular-demos/assets/images/card/avatars/igLogo.png',
        header: 'Tab2',
        content: 'Content2'
    }, {
        image: 'https://www.infragistics.com/angular-demos/assets/images/card/avatars/igLogo.png',
        header: 'Tab3',
        content: 'Content3'
    }];

    closeTab(index: number) {
        this.tabs.splice(index, 1);
    }
}
