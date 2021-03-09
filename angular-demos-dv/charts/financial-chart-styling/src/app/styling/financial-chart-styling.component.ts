import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-styling",
    styleUrls: ["./financial-chart-styling.component.scss"],
    templateUrl: "./financial-chart-styling.component.html"
})
export class FinancialChartStylingComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn(), this.dataService.getTsla(), this.dataService.getMsft ];
    }
}
