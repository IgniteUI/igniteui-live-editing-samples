import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-chart-column-chart-single-source',
    templateUrl: './category-chart-column-chart-single-source.component.html',
    styleUrls: ['./category-chart-column-chart-single-source.component.scss']
})
export class CategoryChartColumnChartSingleSourceComponent implements OnInit {

    public data: any[];

    constructor() { }

    ngOnInit(): void {
        this.data = [
            { Month: "January", Temperature: 3 },
            { Month: "February", Temperature: 4 },
            { Month: "March", Temperature: 9 },
            { Month: "April", Temperature: 15 },
            { Month: "May", Temperature: 21 },
            { Month: "June", Temperature: 26 },
            { Month: "July", Temperature: 29 },
            { Month: "August", Temperature: 28 },
            { Month: "September", Temperature: 24 },
            { Month: "October", Temperature: 18 },
            { Month: "November", Temperature: 11 },
            { Month: "December", Temperature: 5 }
        ];
    }
}
