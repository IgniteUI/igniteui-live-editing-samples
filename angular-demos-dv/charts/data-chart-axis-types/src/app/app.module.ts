import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartAxisTypesComponent } from "./data-chart-axis-types/data-chart-axis-types.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartScatterModule,
	IgxTimeXAxisModule,
	IgxCategoryXAxisModule,
	IgxCategoryYAxisModule,
	IgxNumericXAxisModule,
	IgxNumericYAxisModule,
	IgxNumericAngleAxisModule,
	IgxNumericRadiusAxisModule,
	IgxCategoryAngleAxisModule
 } from "igniteui-angular-charts";
import { SampleFinancialData } from "./SampleFinancialData";
import { SampleCategoryData } from "./SampleCategoryData";
import { SampleScatterData } from "./SampleScatterData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartAxisTypesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxDataChartScatterCoreModule,
		IgxDataChartScatterModule,
		IgxTimeXAxisModule,
		IgxCategoryXAxisModule,
		IgxCategoryYAxisModule,
		IgxNumericXAxisModule,
		IgxNumericYAxisModule,
		IgxNumericAngleAxisModule,
		IgxNumericRadiusAxisModule,
		IgxCategoryAngleAxisModule
  ],
  providers: [
		SampleFinancialData,
		SampleCategoryData,
		SampleScatterData
	],
  entryComponents: []
})
export class AppModule {}
