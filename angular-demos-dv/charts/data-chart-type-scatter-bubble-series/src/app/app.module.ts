import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterBubbleSeriesComponent } from "./data-chart-type-scatter-bubble-series/data-chart-type-scatter-bubble-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartScatterModule,
	IgxNumberAbbreviatorModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeScatterBubbleSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartScatterCoreModule,
		IgxDataChartScatterModule,
		IgxNumberAbbreviatorModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SampleScatterStats],
  entryComponents: []
})
export class AppModule {}
