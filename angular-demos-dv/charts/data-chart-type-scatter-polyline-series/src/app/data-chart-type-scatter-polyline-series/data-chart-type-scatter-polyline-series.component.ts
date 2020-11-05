import { Component, OnInit } from '@angular/core';
import { SampleShapeData } from "../SampleShapeData";

@Component({
  selector: 'app-data-chart-type-scatter-polyline-series',
  templateUrl: './data-chart-type-scatter-polyline-series.component.html',
  styleUrls: ['./data-chart-type-scatter-polyline-series.component.scss']
})
export class DataChartTypeScatterPolylineSeriesComponent implements OnInit {

    public data: any[];
    constructor() {
        this.data = SampleShapeData.create();
    }

    ngOnInit() {
    }

}
