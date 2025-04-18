import { Component, OnInit, ViewChild } from '@angular/core';

import { IgxListComponent, IgxToastComponent, IgxListItemComponent, IgxAvatarComponent, IgxListThumbnailDirective, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxIconComponent, IgxListActionDirective, IgxRippleDirective } from 'igniteui-angular';


@Component({
    selector: 'app-list-8',
    styleUrls: ['./list-sample-8.component.scss'],
    templateUrl: './list-sample-8.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxListThumbnailDirective, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxIconComponent, IgxListActionDirective, IgxRippleDirective]
})
export class ListSample8Component implements OnInit {
    @ViewChild('toast', { static: true })
    public toast: IgxToastComponent;

    @ViewChild('mainIgxList', { static: true })
    public list: IgxListComponent;

    public contacts;

    private dataSource = [{
        isFavorite: false,
        name: 'Terrance Orta',
        phone: '770-504-2217',
        photo: 'https://staging.infragistics.com/angular-demos/assets/images/men/27.jpg'
    }, {
        isFavorite: true,
        name: 'Richard Mahoney',
        phone: '423-676-2869',
        photo: 'https://staging.infragistics.com/angular-demos/assets/images/men/1.jpg'
    }, {
        isFavorite: false,
        name: 'Donna Price',
        phone: '859-496-2817',
        photo: 'https://staging.infragistics.com/angular-demos/assets/images/women/50.jpg'
    }, {
        isFavorite: false,
        name: 'Lisa Landers',
        phone: '901-747-3428',
        photo: 'https://staging.infragistics.com/angular-demos/assets/images/women/3.jpg'
    }, {
        isFavorite: true,
        name: 'Dorothy H. Spencer',
        phone: '573-394-9254',
        photo: 'https://staging.infragistics.com/angular-demos/assets/images/women/67.jpg'
    }
    ];

    constructor() {
    }

    public ngOnInit() {
        this.contacts = Object.assign([], this.dataSource);
    }

    public toggleFavorite(contact: any, event: Event) {
        event.stopPropagation();
        contact.isFavorite = !contact.isFavorite;
    }

    public mousedown(event: Event) {
        event.stopPropagation();
    }
}
