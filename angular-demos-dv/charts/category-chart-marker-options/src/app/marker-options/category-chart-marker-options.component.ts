import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-marker-options",
    styleUrls: ["./category-chart-marker-options.component.scss"],
    templateUrl: "./category-chart-marker-options.component.html"
})
export class CategoryChartMarkerOptionsComponent {

    public chartType: string = "Auto";
    public data: any;

    constructor() {
        const dataUSA: any = [
            { Year: "1996", USA: 148 },
            { Year: "2000", USA: 142 },
            { Year: "2004", USA: 134 },
            { Year: "2008", USA: 131 },
            { Year: "2012", USA: 135 },
            { Year: "2016", USA: 146 }
        ];
        const dataChina: any = [
            { Year: "1996", China: 110 },
            { Year: "2000", China: 115 },
            { Year: "2004", China: 121 },
            { Year: "2008", China: 129 },
            { Year: "2012", China: 115 },
            { Year: "2016", China: 112 }
        ];
        const dataEurope: any = [
            { Year: "1996", Europe: 95 },
            { Year: "2000", Europe: 91 },
            { Year: "2004", Europe: 86 },
            { Year: "2008", Europe: 65 },
            { Year: "2012", Europe: 77 },
            { Year: "2016", Europe: 88 }
        ];
        this.data = [ dataEurope, dataChina, dataUSA ];
    }
}
