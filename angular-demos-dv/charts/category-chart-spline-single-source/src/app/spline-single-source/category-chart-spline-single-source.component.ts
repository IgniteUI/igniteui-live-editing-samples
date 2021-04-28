import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-spline-single-source",
    styleUrls: ["./category-chart-spline-single-source.component.scss"],
    templateUrl: "./category-chart-spline-single-source.component.html"
})
export class CategoryChartSplineSingleSourceComponent {

    public data: any;

    constructor() {
        const items: any = [
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
        this.data = [ items ];
    }
}
