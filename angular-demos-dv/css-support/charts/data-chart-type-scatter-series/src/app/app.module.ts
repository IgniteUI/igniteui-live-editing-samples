import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterSeriesComponent } from "./data-chart-type-scatter-series/data-chart-type-scatter-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartInteractivityModule,
	IgxLegendModule
 } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeScatterSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartScatterModule,
		IgxDataChartScatterCoreModule,
		IgxDataChartInteractivityModule,
		IgxLegendModule
  ],
  providers: [SampleScatterStats],
  entryComponents: []
})
export class AppModule {}
