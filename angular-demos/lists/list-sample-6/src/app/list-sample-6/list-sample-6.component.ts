import { Component, ViewChild } from '@angular/core';
import { IgxListComponent, IgxListItemComponent, IgxRippleDirective, IgxEmptyListTemplateDirective, IgxButtonDirective, IgxDataLoadingTemplateDirective } from 'igniteui-angular';


@Component({
    selector: 'app-list-sample-6',
    styleUrls: ['./list-sample-6.component.scss'],
    templateUrl: './list-sample-6.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxRippleDirective, IgxEmptyListTemplateDirective, IgxButtonDirective, IgxDataLoadingTemplateDirective]
})
export class ListSample6Component {

    @ViewChild('fruitList', { static: true })
    public fruitList: IgxListComponent;

    public fruitsData: string[] = [];

    constructor() { }

    public loadFruits() {
        this.fruitList.isLoading = true;
        setTimeout(() => {
            const availableFruits: string[] = ['banana', 'orange', 'apple', 'strawberry', 'pear'];
            availableFruits.forEach((fruit) => { this.fruitsData.push(fruit); });
            this.fruitList.isLoading = false;
        }, 1000);
    }

}
