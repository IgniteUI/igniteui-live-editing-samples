import { Component, OnInit } from '@angular/core';
import { SampleScatterStats } from "../SampleScatterStats";

@Component({
    selector: 'app-data-chart-type-scatter-line-series',
    templateUrl: './data-chart-type-scatter-line-series.component.html',
    styleUrls: ['./data-chart-type-scatter-line-series.component.scss']
})
export class DataChartTypeScatterLineSeriesComponent implements OnInit {

    public data1: any[];
    public data2: any[];

    constructor() {
        this.data1 = SampleScatterStats.getCountriesWithHighIncome();
        this.data2 = SampleScatterStats.getCountriesWithLowIncome();
    }

    ngOnInit() {
    }

}
