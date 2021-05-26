import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartStackedSeriesComponent } from "./stacked-series/data-chart-stacked-series.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxLegendModule,
	IgxDataChartStackedModule,
	IgxStackedFragmentSeriesModule
 } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartStackedSeriesComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxLegendModule,
	IgxDataChartStackedModule,
	IgxStackedFragmentSeriesModule
],
  providers: [SharedData],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
