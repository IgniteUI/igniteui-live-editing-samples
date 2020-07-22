import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartAxisTypesComponent } from "./data-chart-axis-types/data-chart-axis-types.component";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
import { IgxTimeXAxisModule } from "igniteui-angular-charts/ES5/igx-time-x-axis-module";
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxCategoryYAxisModule } from "igniteui-angular-charts/ES5/igx-category-y-axis-module";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxNumericAngleAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-angle-axis-module";
import { IgxNumericRadiusAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis-module";
import { IgxCategoryAngleAxisModule } from "igniteui-angular-charts/ES5/igx-category-angle-axis-module";
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
