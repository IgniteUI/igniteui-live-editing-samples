import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-volume-types",
    styleUrls: ["./financial-chart-volume-types.component.scss"],
    templateUrl: "./financial-chart-volume-types.component.html"
})
export class FinancialChartVolumeTypesComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getAmzn();
    }
}
