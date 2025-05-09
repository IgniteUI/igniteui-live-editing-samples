import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions, IgxInputGroupComponent, IgxInputDirective, IgxPrefixDirective, IgxIconComponent, IgxSuffixDirective, IgxListComponent, IgxListItemComponent, IgxForOfDirective, IgxAvatarComponent, IgxFilterPipe } from 'igniteui-angular';
import { femaleFNames, lastName, maleFNames } from '../names';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-igx-for-horizontal',
    styleUrls: ['./igxFor-horizontal.component.scss'],
    templateUrl: './igxFor-horizontal.component.html',
    imports: [IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxPrefixDirective, IgxIconComponent, IgxSuffixDirective, IgxListComponent, IgxListItemComponent, IgxForOfDirective, IgxAvatarComponent, IgxFilterPipe]
})
export class IgxForHorizontalComponent implements OnInit {
    public search: string;
    public data = [];
    get fo() {
        const _fo = new IgxFilterOptions();
        _fo.key = 'name';
        _fo.inputValue = this.search;
        return _fo;
    }
    constructor() { }
    public ngOnInit() {
        const data = [];
        for (let i = 0; i < 100000; i++) {
            const item = this.generatePerson(i);
            data.push(item);
        }
        this.data = data;
    }
    private generatePerson(index) {
        const item = new Person();
        item.key = index;
        const gender = index % 2 === 0 ? 'M' : 'F';
        item.name = this.generateName(gender);
        item.avatar = 'https://staging.infragistics.com/angular-demos/assets/images/' +
            (gender === 'M' ? 'men' : 'women') +
            '/' + Math.floor((Math.random() * 100)) + '.jpg';
        return item;
    }
    private generateName(gender): string {
        let name = '';
        const fNames = gender === 'M' ? maleFNames : femaleFNames;
        name += fNames[Math.floor(Math.random() * fNames.length)] + ' ';
        name += lastName[Math.floor(Math.random() * lastName.length)];
        return name;
    }
}

export class Person {
    public key: number;
    public name: string;
    public avatar: string;
}
