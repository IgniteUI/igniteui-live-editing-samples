import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartOverviewComponent } from "./data-chart-overview/data-chart-overview.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartScatterModule,
	IgxNumberAbbreviatorModule,
	IgxDataChartInteractivityModule,
	IgxLegendModule
 } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartScatterCoreModule,
		IgxDataChartScatterModule,
		IgxNumberAbbreviatorModule,
		IgxDataChartInteractivityModule,
		IgxLegendModule
  ],
  providers: [SampleScatterStats],
  entryComponents: []
})
export class AppModule {}
