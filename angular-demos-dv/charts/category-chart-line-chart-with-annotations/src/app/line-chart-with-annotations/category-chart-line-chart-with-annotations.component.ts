import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxCalloutLayerComponent} from "igniteui-angular-charts";
import { IgxSeriesComponent } from "igniteui-angular-charts";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-line-chart-with-annotations",
    styleUrls: ["./category-chart-line-chart-with-annotations.component.scss"],
    templateUrl: "./category-chart-line-chart-with-annotations.component.html"
})
export class CategoryChartLineChartWithAnnotationsComponent implements OnInit {

    public chart: IgxDataChartComponent;
    public calloutData: CalloutInfo[];
    public calloutLayer: IgxCalloutLayerComponent;
    public sampleOptions: SampleOptions = new SampleOptions();
    public include: string[];
    public data: any[];

    constructor() {
        
        this.include = ["Year", "USA"];

        this.calloutLayer = new IgxCalloutLayerComponent();
        this.calloutLayer.xMemberPath = "value";
        this.calloutLayer.yMemberPath = "index";
        this.calloutLayer.labelMemberPath = "label";
        this.calloutLayer.contentMemberPath = "label";
    }

    public ngOnInit() {
        
        this.data = [
            { Year: "2009", Europe: 31, China: 21, USA: 19 },
            { Year: "2010", Europe: 43, China: 26, USA: 24 },
            { Year: "2011", Europe: 66, China: 29, USA: 28 },
            { Year: "2012", Europe: 69, China: 32, USA: 26 },
            { Year: "2013", Europe: 58, China: 47, USA: 38 },
            { Year: "2014", Europe: 40, China: 46, USA: 31 },
            { Year: "2015", Europe: 78, China: 50, USA: 19 },
            { Year: "2016", Europe: 13, China: 90, USA: 52 },
            { Year: "2017", Europe: 78, China: 132, USA: 50 },
            { Year: "2018", Europe: 40, China: 134, USA: 34 },
            { Year: "2019", Europe: 80, China: 96, USA: 38 },
        ];

        //callout layer
        let idx: number = 0;

        for (const item of this.data) {
            item.index = idx;
            item.label = item.USA + " " + "TWh",
            item.value = item.USA;            
            idx++;
        }

        this.addCalloutLayer(this.calloutLayer);

    }

    public addCalloutLayer(series: IgxSeriesComponent) {
        this.chart.series.add(series);
    }
}

class CalloutInfo {
   
    //  Callout Properties
    public index: number;
    public value: number;
    public label: string;

    public constructor(init?: Partial<CalloutInfo>) {
        Object.assign(this, init);
    }
}

class SampleOptions {
    public crosshairsDisplay: string = "Both";
    public crosshairAnnotations: boolean = true;
    public finalValuesVisible: boolean = true;
    public calloutsVisible: boolean = true;
}
