import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeRadialColumnSeriesComponent } from "./data-chart-type-radial-column-series/data-chart-type-radial-column-series.component";
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
		DataChartTypeRadialColumnSeriesComponent
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
