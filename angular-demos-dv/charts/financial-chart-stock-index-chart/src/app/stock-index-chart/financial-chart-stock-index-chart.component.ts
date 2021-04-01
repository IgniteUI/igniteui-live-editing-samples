import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StockIndexDataService } from "../services/stock-index-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockIndexDataService ],
    selector: "app-financial-chart-stock-index-chart",
    styleUrls: ["./financial-chart-stock-index-chart.component.scss"],
    templateUrl: "./financial-chart-stock-index-chart.component.html"
})
export class FinancialChartStockIndexChartComponent {

    public stocksData: any;
    
    constructor(private dataService: StockIndexDataService) {
        this.stocksData = [
            this.dataService.getData()
        ];
    }
}
