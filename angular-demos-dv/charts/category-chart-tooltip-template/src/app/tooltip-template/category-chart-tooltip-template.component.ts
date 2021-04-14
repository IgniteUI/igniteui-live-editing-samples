import { ChangeDetectionStrategy, Component, ViewChild, TemplateRef } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-tooltip-template",
    styleUrls: ["./category-chart-tooltip-template.component.scss"],
    templateUrl: "./category-chart-tooltip-template.component.html"
})
export class CategoryChartTooltipTemplateComponent {

    public data = [
        { Franchise: "Marvel Universe All Films", TotalRevenue: 22.55, HighestGrossing: 2.8 },
        { Franchise: "Star Wars", TotalRevenue: 10.32, HighestGrossing: 2.07 },
        { Franchise: "Harry Potter", TotalRevenue: 9.19, HighestGrossing: 1.34 },
        { Franchise: "Avengers", TotalRevenue: 7.76, HighestGrossing: 2.8 },
        { Franchise: "Spider Man", TotalRevenue: 7.22, HighestGrossing: 1.28 },
        { Franchise: "James Bond", TotalRevenue: 7.12, HighestGrossing: 1.11 }
    ];

    @ViewChild('valueTooltip', { static: true })
    public valueTooltip: TemplateRef<object>;

    constructor() {
    }

    public onSeriesAdded(e: any) {
        if (e.args.series) {
            e.args.series.tooltipTemplate = this.valueTooltip;
        }
    }
}
