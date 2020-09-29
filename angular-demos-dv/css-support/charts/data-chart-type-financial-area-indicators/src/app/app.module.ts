import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeFinancialAreaIndicatorsComponent } from "./data-chart-type-financial-area-indicators/data-chart-type-financial-area-indicators.component";
import { 
	IgxNumericXAxisModule,
	IgxNumericYAxisModule,
	IgxMoneyFlowIndexIndicatorModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxFinancialPriceSeriesModule
 } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeFinancialAreaIndicatorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxNumericXAxisModule,
		IgxNumericYAxisModule,
		IgxMoneyFlowIndexIndicatorModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxFinancialPriceSeriesModule
  ],
  providers: [SampleFinancialData],
  entryComponents: []
})
export class AppModule {}
