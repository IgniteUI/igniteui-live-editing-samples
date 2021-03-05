import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterDensitySeriesComponent } from "./data-chart-type-scatter-density-series/data-chart-type-scatter-density-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleDensityData } from "./SampleDensityData";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartTypeScatterDensitySeriesComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartInteractivityModule
],
  providers: [SampleDensityData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
