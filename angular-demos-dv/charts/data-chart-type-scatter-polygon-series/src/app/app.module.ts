import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartTypeScatterPolygonSeriesComponent } from "./data-chart-type-scatter-polygon-series/data-chart-type-scatter-polygon-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartShapeModule,
	IgxDataChartShapeCoreModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule,
	IgxDataChartScatterModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartTypeScatterPolygonSeriesComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartShapeModule,
	IgxDataChartShapeCoreModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule,
	IgxDataChartScatterModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
