import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterHdSeriesComponent } from "./data-chart-type-scatter-hd-series/data-chart-type-scatter-hd-series.component";
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
	DataChartTypeScatterHdSeriesComponent
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
