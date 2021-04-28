import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-chart-area-chart-single-source',
    templateUrl: './category-chart-area-chart-single-source.component.html',
    styleUrls: ['./category-chart-area-chart-single-source.component.scss']
})
export class CategoryChartAreaChartSingleSourceComponent implements OnInit {

    public data: any[];

    constructor() {
        this.data = [
            { Year: "2009", Europe: 31 },
            { Year: "2010", Europe: 43 },
            { Year: "2011", Europe: 66 },
            { Year: "2012", Europe: 69 },
            { Year: "2013", Europe: 58 },
            { Year: "2014", Europe: 40 },
            { Year: "2015", Europe: 78 },
            { Year: "2016", Europe: 13 },
            { Year: "2017", Europe: 78 },
            { Year: "2018", Europe: 40 },
            { Year: "2019", Europe: 80 }
        ];
    }

    ngOnInit(): void {
    }

}
