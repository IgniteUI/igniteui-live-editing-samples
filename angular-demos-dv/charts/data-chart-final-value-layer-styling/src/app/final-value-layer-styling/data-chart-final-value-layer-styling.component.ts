import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-chart-final-value-layer-styling',
    templateUrl: './data-chart-final-value-layer-styling.component.html',
    styleUrls: ['./data-chart-final-value-layer-styling.component.scss']
})
export class DataChartFinalValueLayerStylingComponent implements OnInit {

    public data: any[];

    constructor() { }

    ngOnInit(): void {
        this.data = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 }
        ];
    }
}
