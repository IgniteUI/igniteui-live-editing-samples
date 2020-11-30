import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterAreaSeriesComponent } from "./data-chart-type-scatter-area-series/data-chart-type-scatter-area-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartInteractivityModule,
	IgxScatterAreaSeriesModule
 } from "igniteui-angular-charts";
import { SampleScatterData } from "./SampleScatterData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeScatterAreaSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartScatterModule,
		IgxDataChartScatterCoreModule,
		IgxDataChartInteractivityModule,
		IgxScatterAreaSeriesModule
  ],
  providers: [SampleScatterData],
  entryComponents: []
})
export class AppModule {}
