import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeFinancialOverlaysComponent } from "./data-chart-type-financial-overlays/data-chart-type-financial-overlays.component";
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
		DataChartTypeFinancialOverlaysComponent
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
