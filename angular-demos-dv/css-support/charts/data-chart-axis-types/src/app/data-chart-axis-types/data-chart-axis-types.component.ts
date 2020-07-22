import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";

import { IgxCategoryXAxisComponent } from "igniteui-angular-charts";
import { IgxCategoryYAxisComponent } from "igniteui-angular-charts";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts";
import { IgxTimeXAxisComponent } from "igniteui-angular-charts";

import { IgxBarSeriesComponent } from "igniteui-angular-charts";
import { IgxColumnSeriesComponent } from "igniteui-angular-charts";
import { IgxFinancialPriceSeriesComponent } from "igniteui-angular-charts";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts";
import { MarkerType } from "igniteui-angular-charts";

import { SampleCategoryData } from "../SampleCategoryData";
import { SampleFinancialData } from "../SampleFinancialData";
import { SampleScatterData } from "../SampleScatterData";

@Component({
    selector: "app-data-chart-axis-types",
    styleUrls: ["./data-chart-axis-types.component.css"],
    templateUrl: "./data-chart-axis-types.component.html"
})
export class DataChartAxisTypesComponent implements OnInit {

    public categoryData: any[];
    public financialData: any[];
    public scatterData: any[];

    public chartType: string = "Column (CategoryXAxis)";

    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    public numericXAxis: IgxNumericXAxisComponent;
    public numericYAxis: IgxNumericYAxisComponent;

    public categoryXAxis: IgxCategoryXAxisComponent;
    public categoryYAxis: IgxCategoryYAxisComponent;

    public timeXAxis: IgxTimeXAxisComponent;

    public columnSeries1: IgxColumnSeriesComponent;
    public columnSeries2: IgxColumnSeriesComponent;

    public barSeries1: IgxBarSeriesComponent;
    public barSeries2: IgxBarSeriesComponent;

    public scatterSeries1: IgxScatterSeriesComponent;
    public scatterSeries2: IgxScatterSeriesComponent;

    public financialSeries: IgxFinancialPriceSeriesComponent;

    constructor() {
        this.initData();
        this.initAxes();
        this.initCategorySeries();
        this.initScatterSeries();
        this.initFinancialSeries();
    }

    public ngOnInit() {
        this.chart.axes.add(this.categoryXAxis);
        this.chart.axes.add(this.numericYAxis);

        this.chart.series.add(this.columnSeries1);
        this.chart.series.add(this.columnSeries2);
    }

    public initCategorySeries() {
        this.columnSeries1 = new IgxColumnSeriesComponent();
        this.columnSeries1.dataSource = this.categoryData;
        this.columnSeries1.xAxis = this.categoryXAxis;
        this.columnSeries1.yAxis = this.numericYAxis;
        this.columnSeries1.valueMemberPath = "USA";

        this.columnSeries2 = new IgxColumnSeriesComponent();
        this.columnSeries2.dataSource = this.categoryData;
        this.columnSeries2.xAxis = this.categoryXAxis;
        this.columnSeries2.yAxis = this.numericYAxis;
        this.columnSeries2.valueMemberPath = "RUS";

        this.barSeries1 = new IgxBarSeriesComponent();
        this.barSeries1.dataSource = this.categoryData;
        this.barSeries1.xAxis = this.numericXAxis;
        this.barSeries1.yAxis = this.categoryYAxis;
        this.barSeries1.valueMemberPath = "USA";

        this.barSeries2 = new IgxBarSeriesComponent();
        this.barSeries2.dataSource = this.categoryData;
        this.barSeries2.xAxis = this.numericXAxis;
        this.barSeries2.yAxis = this.categoryYAxis;
        this.barSeries2.valueMemberPath = "RUS";
    }

    public initAxes() {
        this.categoryXAxis = new IgxCategoryXAxisComponent();
        this.categoryXAxis.title = "Category X Axis";
        this.categoryXAxis.dataSource = this.categoryData;
        this.categoryXAxis.label = "Year";

        this.categoryYAxis = new IgxCategoryYAxisComponent();
        this.categoryYAxis.title = "Category Y Axis";
        this.categoryYAxis.dataSource = this.categoryData;
        this.categoryYAxis.label = "Year";

        this.numericXAxis = new IgxNumericXAxisComponent();
        this.numericXAxis.title = "Numeric X Axis";

        this.numericYAxis = new IgxNumericYAxisComponent();
        this.numericYAxis.title = "Numeric Y Axis";

        this.timeXAxis = new IgxTimeXAxisComponent();
        this.timeXAxis.title = "Time X Axis";
        this.timeXAxis.dataSource = this.financialData;
        this.timeXAxis.dateTimeMemberPath = "Time";
        this.timeXAxis.label = "Date";
    }

    public initFinancialSeries() {
        this.financialSeries = new IgxFinancialPriceSeriesComponent();
        this.financialSeries.dataSource = this.financialData;
        this.financialSeries.xAxis = this.timeXAxis;
        this.financialSeries.yAxis = this.numericYAxis;
        this.financialSeries.highMemberPath = "High";
        this.financialSeries.lowMemberPath = "Low";
        this.financialSeries.closeMemberPath = "Close";
        this.financialSeries.openMemberPath = "Open";
        this.financialSeries.volumeMemberPath = "Volume";
    }

    public initScatterSeries() {
        this.scatterSeries1 = new IgxScatterSeriesComponent();
        this.scatterSeries1.dataSource = this.scatterData;
        this.scatterSeries1.xAxis = this.numericXAxis;
        this.scatterSeries1.yAxis = this.numericYAxis;
        this.scatterSeries1.xMemberPath = "Index";
        this.scatterSeries1.yMemberPath = "SinValue";
        this.scatterSeries1.markerType = MarkerType.Circle;

        this.scatterSeries2 = new IgxScatterSeriesComponent();
        this.scatterSeries2.dataSource = this.scatterData;
        this.scatterSeries2.xAxis = this.numericXAxis;
        this.scatterSeries2.yAxis = this.numericYAxis;
        this.scatterSeries2.xMemberPath = "Index";
        this.scatterSeries2.yMemberPath = "CosValue";
        this.scatterSeries2.markerType = MarkerType.Circle;
    }

    public initData() {
        this.categoryData = SampleCategoryData.create();
        this.scatterData = SampleScatterData.createWaveData();
        this.financialData = SampleFinancialData.create();
    }

    public onAxisTypeChange = (e: any) => {
        this.chart.axes.clear();
        this.chart.series.clear();

        const value: string = e.target.value;

        if (value.includes("Column")) {
            this.chart.axes.add(this.categoryXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.columnSeries1);
            this.chart.series.add(this.columnSeries2);
        } else if (value.includes("Bar")) {
            this.chart.axes.add(this.categoryYAxis);
            this.chart.axes.add(this.numericXAxis);

            this.chart.series.add(this.barSeries1);
            this.chart.series.add(this.barSeries2);
        } else if (value.includes("Scatter")) {
            this.chart.axes.add(this.numericXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.scatterSeries1);
            this.chart.series.add(this.scatterSeries2);
        } else {
            this.chart.axes.add(this.timeXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.financialSeries);
        }
    }
}
