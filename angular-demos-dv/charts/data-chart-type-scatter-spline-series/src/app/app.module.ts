import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterSplineSeriesComponent } from "./data-chart-type-scatter-spline-series/data-chart-type-scatter-spline-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeScatterSplineSeriesComponent
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
  providers: [SampleScatterData],
  entryComponents: []
})
export class AppModule {}
