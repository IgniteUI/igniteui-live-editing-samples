import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartAxisSharingComponent } from "./data-chart-axis-sharing/data-chart-axis-sharing.component";
import { 
	IgxNumericXAxisModule,
	IgxNumericYAxisModule,
	IgxMoneyFlowIndexIndicatorModule,
	IgxLegendModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxFinancialPriceSeriesModule
 } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartAxisSharingComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxNumericXAxisModule,
	IgxNumericYAxisModule,
	IgxMoneyFlowIndexIndicatorModule,
	IgxLegendModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxFinancialPriceSeriesModule
],
  providers: [SampleFinancialData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
