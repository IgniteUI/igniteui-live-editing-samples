import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-3',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-3.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-3.component.html'
})

export class HGridExcelStyleFilteringSample3Component implements OnInit {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

    public formatter = (a) => a;
}