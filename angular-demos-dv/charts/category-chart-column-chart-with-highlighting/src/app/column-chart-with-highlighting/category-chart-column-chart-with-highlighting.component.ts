import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { IgxCategoryChartComponent } from "igniteui-angular-charts";

@Component({
    selector: 'app-category-chart-column-chart-with-highlighting',
    templateUrl: './category-chart-column-chart-with-highlighting.component.html',
    styleUrls: ['./category-chart-column-chart-with-highlighting.component.scss']
})
export class CategoryChartColumnChartWithHighlightingComponent implements AfterViewInit {

    @ViewChild("chart", { static: true })
    public chart: IgxCategoryChartComponent;

    public isItemHighlightingEnabled: boolean = true;
    public isSeriesHighlightingEnabled: boolean = false;
    public isCategoryHighlightingEnabled: boolean = false;
    public excludedProperties: any;

    public data = [
        { Month: "JAN", NYC : 10.6, LA : 28.3 },
        { Month: "FEB", NYC : 7.8,  LA : 31.1 },
        { Month: "MAR", NYC : 12.2, LA : 27.8 },
        { Month: "APR", NYC : 11.7, LA : 33.9 },
        { Month: "MAY", NYC : 19.4, LA : 35.0 },
        { Month: "JUN", NYC : 23.3, LA : 36.7 },
        { Month: "JUL", NYC : 27.2, LA : 33.3 },
        { Month: "AUG", NYC : 25.6, LA : 36.7 },
        { Month: "SEP", NYC : 22.8, LA : 43.9 },
        { Month: "OCT", NYC : 17.8, LA : 38.3 },
        { Month: "NOV", NYC : 17.8, LA : 32.8 },
        { Month: "DEC", NYC : 8.3,  LA : 28.9 }
    ];

    public ngAfterViewInit(): void {
    }

    constructor() { }
}
