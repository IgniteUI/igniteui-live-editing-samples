import {AfterViewInit, ViewChild, ChangeDetectionStrategy, Component } from "@angular/core";
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { StocksUtility } from "../../data-chart/StocksUtility";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StocksUtility ],
    selector: "app-financial-chart-annotations",
    styleUrls: ["./financial-chart-annotations.component.scss"],
    templateUrl: "./financial-chart-annotations.component.html"
})
export class FinancialChartAnnotationsComponent implements AfterViewInit {

    @ViewChild("financialChart", { static: true })
    public chart: IgxFinancialChartComponent;
    public stocksData: any;
    public calloutsData: any[];
    public options: SampleOptions = new SampleOptions();
    public excludedProperties: any;

    constructor(private dataService: StocksUtility) {

        var today = new Date()
        var year = today.getFullYear();
        var dateMonth = today.getMonth();
        var dateEnd = new Date(year + 5, dateMonth, 1);
        var dateStart = new Date(year - 1, dateMonth, 1);
        
        this.stocksData = [
            this.dataService = StocksUtility.GetStocksBetween(dateStart, dateEnd)            
        ];
        
        this.calloutsData = this.getCallouts(this.stocksData);
    }

    public ngAfterViewInit(): void {
        // binding only properties with "stack" prefix
        this.chart.excludedProperties = [
            "info", "label", "value"
        ];
    }

    public getCallouts(stocks: any[]): any[] {
        const callouts: any[] = [];
        for (const stock of stocks) {
            const intervalSplit = Math.floor(Math.random() * (300 - 280)) + 280;
            const intervalDiv = Math.floor(Math.random() * (400 - 360)) + 360;
            const calloutMin = new CalloutDataItem({label: "MIN"});
            const calloutMax = new CalloutDataItem({label: "MAX"});
            // initalizing values for min/max callouts
            calloutMin.value = Number.MAX_VALUE;
            calloutMax.value = Number.MIN_VALUE;
            let idx: number = 0;
            let currentYear: number = 0;
            let currentQuarter: number = 0;

            for (const item of stock) {
                // finding item with min/max price
                if (calloutMin.value > item.close) {
                    calloutMin.value = item.close;
                    calloutMin.index = idx;
                }
                if (calloutMax.value < item.close) {
                    calloutMax.value = item.close;
                    calloutMax.index = idx;
                }
                const offset = idx + 10;
                const calloutEvent = new CalloutDataItem({index: idx });
                // creating SPLIT/DIVIDENT events at specific intervals
                if (offset % intervalSplit === 5) {
                    calloutEvent.value = item.close;
                    calloutEvent.label = "SPLIT";
                    callouts.push(calloutEvent);
                } else if (offset % intervalDiv === 5) {
                    calloutEvent.value = item.close;
                    calloutEvent.label = "DIV";
                    callouts.push(calloutEvent);
                }

                idx++;
            }
            callouts.push(calloutMin);
            callouts.push(calloutMax);
        }
        return callouts;
    }
}

class CalloutDataItem {
    public label: string;
    public index: number;
    public value: number;

    public constructor(init?: Partial<CalloutDataItem>) {
        Object.assign(this, init);
    }
}

class SampleOptions {
    public crosshairAnnotations: string = "Both";
    public finalValueAnnotations: boolean = true;
    public calloutsVisible: boolean = true;
    public itemToolTip: string = "Item";
    public markerTypes: string = "None";
}
