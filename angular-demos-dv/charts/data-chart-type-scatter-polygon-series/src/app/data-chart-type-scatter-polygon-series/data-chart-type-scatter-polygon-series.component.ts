import { Component, OnInit } from '@angular/core';
import { SampleShapeData } from "../SampleShapeData";

@Component({
    selector: 'app-data-chart-type-scatter-polygon-series',
    templateUrl: './data-chart-type-scatter-polygon-series.component.html',
    styleUrls: ['./data-chart-type-scatter-polygon-series.component.scss']
})
export class DataChartTypeScatterPolygonSeriesComponent implements OnInit {

    public data: any[];
    constructor() { 
        this.data = SampleShapeData.create();
    }

    ngOnInit() {
    }

}
