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
            { Month: "JAN", Temperature: 3 },
            { Month: "FEB", Temperature: 4 },
            { Month: "MAR", Temperature: 9 },
            { Month: "APR", Temperature: 15 },
            { Month: "MAY", Temperature: 21 },
            { Month: "JUN", Temperature: 26 },
            { Month: "JUL", Temperature: 29 },
            { Month: "AUG", Temperature: 28 },
            { Month: "SEP", Temperature: 24 },
            { Month: "OCT", Temperature: 18 },
            { Month: "NOV", Temperature: 11 },
            { Month: "DEC", Temperature: 5 }
        ];
    }
}
