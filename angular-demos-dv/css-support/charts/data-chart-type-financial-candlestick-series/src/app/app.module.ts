import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeFinancialCandlestickSeriesComponent } from "./data-chart-type-financial-candlestick-series/data-chart-type-financial-candlestick-series.component";
import { 
	IgxDataChartCoreModule,
	IgxLegendModule,
	IgxIndicatorsModule,
	IgxFinancialPriceSeriesModule,
	IgxDataChartInteractivityModule,
	IgxBollingerBandsOverlayModule,
	IgxNumericXAxisModule,
	IgxNumericYAxisModule,
	IgxCategoryXAxisModule
 } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeFinancialCandlestickSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxLegendModule,
		IgxIndicatorsModule,
		IgxFinancialPriceSeriesModule,
		IgxDataChartInteractivityModule,
		IgxBollingerBandsOverlayModule,
		IgxNumericXAxisModule,
		IgxNumericYAxisModule,
		IgxCategoryXAxisModule
  ],
  providers: [SampleFinancialData],
  entryComponents: []
})
export class AppModule {}
