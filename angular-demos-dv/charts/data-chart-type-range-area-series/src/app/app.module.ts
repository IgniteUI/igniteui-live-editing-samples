import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeRangeAreaSeriesComponent } from "./data-chart-type-range-area-series/data-chart-type-range-area-series.component";
import { 
	IgxDataChartCoreModule,
	IgxLegendModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleRangeData } from "./SampleRangeData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeRangeAreaSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxLegendModule,
		IgxDataChartCategoryModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SampleRangeData],
  entryComponents: []
})
export class AppModule {}
