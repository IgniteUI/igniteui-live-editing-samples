import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterLineSeriesComponent } from "./data-chart-type-scatter-line-series/data-chart-type-scatter-line-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartTypeScatterLineSeriesComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule
],
  providers: [SampleScatterData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
