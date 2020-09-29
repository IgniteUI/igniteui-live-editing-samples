import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeRadialSeriesComponent } from "./data-chart-type-radial-series/data-chart-type-radial-series.component";
import { 
	IgxDataChartCoreModule,
	IgxLegendModule,
	IgxDataChartRadialModule,
	IgxDataChartRadialCoreModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleRadialData } from "./SampleRadialData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeRadialSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxLegendModule,
		IgxDataChartRadialModule,
		IgxDataChartRadialCoreModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SampleRadialData],
  entryComponents: []
})
export class AppModule {}
