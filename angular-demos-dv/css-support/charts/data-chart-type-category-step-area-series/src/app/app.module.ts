import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeCategoryStepAreaSeriesComponent } from "./data-chart-type-category-step-area-series/data-chart-type-category-step-area-series.component";
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
		DataChartTypeCategoryStepAreaSeriesComponent
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
