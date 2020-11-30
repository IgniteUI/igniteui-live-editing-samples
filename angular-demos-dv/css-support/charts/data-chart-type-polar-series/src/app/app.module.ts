import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypePolarSeriesComponent } from "./data-chart-type-polar-series/data-chart-type-polar-series.component";
import { 
	IgxDataChartCoreModule,
	IgxLegendModule,
	IgxDataChartPolarModule,
	IgxDataChartPolarCoreModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SamplePolarData } from "./SamplePolarData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypePolarSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxLegendModule,
		IgxDataChartPolarModule,
		IgxDataChartPolarCoreModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SamplePolarData],
  entryComponents: []
})
export class AppModule {}
