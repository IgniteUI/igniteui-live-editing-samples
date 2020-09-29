import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeStacked100BarSeriesComponent } from "./data-chart-type-stacked100-bar-series/data-chart-type-stacked100-bar-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxLegendModule
 } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeStacked100BarSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxDataChartInteractivityModule,
		IgxLegendModule
  ],
  providers: [SharedData],
  entryComponents: []
})
export class AppModule {}
