import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartPerformanceComponent } from "./performance/financial-chart-performance.component";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { GenerateOhlcPricesService } from "./services/generate-ohlc-prices.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		FinancialChartPerformanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxFinancialChartModule
  ],
  providers: [GenerateOhlcPricesService],
  entryComponents: []
})
export class AppModule {}
