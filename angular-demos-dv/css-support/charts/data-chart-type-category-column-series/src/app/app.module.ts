import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeCategoryColumnSeriesComponent } from "./data-chart-type-category-column-series/data-chart-type-category-column-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleCategoryData } from "./SampleCategoryData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeCategoryColumnSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxLegendModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SampleCategoryData],
  entryComponents: []
})
export class AppModule {}
