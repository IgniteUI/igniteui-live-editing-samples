import { Component, OnInit, ViewChild } from "@angular/core";

import { IgxListComponent, IgxToastComponent } from "igniteui-angular";

@Component({
    selector: "app-contact-list2",
    styleUrls: ["./list-sample-7.component.scss"],
    templateUrl: "./list-sample-7.component.html"
})
export class ListSample7Component implements OnInit {

    public contacts;

    @ViewChild("toast", { static: true })
    public toast: IgxToastComponent;

    @ViewChild("mainIgxList", { static: true })
    public list: IgxListComponent;

    private dataSource = [{
        isFavorite: false,
        name: "Terrance Orta",
        phone: "770-504-2217",
        photo: "https://www.infragistics.com/angular-demos/assets/images/men/27.jpg"
    }, {
        isFavorite: true,
        name: "Richard Mahoney",
        phone: "423-676-2869",
        photo: "https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
    }, {
        isFavorite: false,
        name: "Donna Price",
        phone: "859-496-2817",
        photo: "https://www.infragistics.com/angular-demos/assets/images/women/50.jpg"
    }, {
        isFavorite: false,
        name: "Lisa Landers",
        phone: "901-747-3428",
        photo: "https://www.infragistics.com/angular-demos/assets/images/women/3.jpg"
    }, {
        isFavorite: true,
        name: "Dorothy H. Spencer",
        phone: "573-394-9254",
        photo: "https://www.infragistics.com/angular-demos/assets/images/women/67.jpg"
    }
    ];

    constructor() {
    }

    public ngOnInit() {
        this.contacts = Object.assign([], this.dataSource);
    }

    public toggleFavorite(contact: any) {
        contact.isFavorite = !contact.isFavorite;
    }

    public rightPanPerformed(args) {
        args.keepItem = true;
        this.toast.message = "Dialing " + this.contacts[args.item.index - 1].name;
        this.toast.show();
    }

    public leftPanPerformed(args) {
        args.keepItem = false;
        setTimeout((idx = args.item.index - 1) => {
            this.toast.message = "Contact " + this.contacts[idx].name + " removed.";
            this.toast.show();
            this.contacts.splice(idx, 1);
        }, 500);
    }

    public repopulateHandler() {
        this.contacts = Object.assign([], this.dataSource);
    }

    public get panThreshold() {
        const result = this.list.panEndTriggeringThreshold;
        return Math.round(result * 100) + "%";
    }

}
