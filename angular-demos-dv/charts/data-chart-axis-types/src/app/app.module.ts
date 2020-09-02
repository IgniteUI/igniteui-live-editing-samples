import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

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
