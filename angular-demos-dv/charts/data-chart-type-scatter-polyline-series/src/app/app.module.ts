import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterPolylineSeriesComponent } from "./data-chart-type-scatter-polyline-series/data-chart-type-scatter-polyline-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartShapeModule,
	IgxDataChartShapeCoreModule,
	IgxDataChartInteractivityModule,
	IgxDataChartScatterModule
 } from "igniteui-angular-charts";
import { SampleShapeData } from "./SampleShapeData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeScatterPolylineSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartShapeModule,
		IgxDataChartShapeCoreModule,
		IgxDataChartInteractivityModule,
		IgxDataChartScatterModule
  ],
  providers: [SampleShapeData],
  entryComponents: []
})
export class AppModule {}
