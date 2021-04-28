import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartStackedColumnChartComponent } from "./stacked-column-chart/data-chart-stacked-column-chart.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxLegendModule,
	IgxDataChartStackedModule,
	IgxStackedFragmentSeriesModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartStackedColumnChartComponent
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
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
