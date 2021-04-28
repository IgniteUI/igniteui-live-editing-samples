import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartSeriesMarkersComponent } from "./data-chart-series-markers/data-chart-series-markers.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxLegendModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartScatterModule,
	IgxNumberAbbreviatorModule
 } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartSeriesMarkersComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxLegendModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartScatterModule,
	IgxNumberAbbreviatorModule
],
  providers: [SharedData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
