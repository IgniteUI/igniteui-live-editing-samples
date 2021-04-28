import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartStacked100LineChartComponent } from "./stacked-100-line-chart/data-chart-stacked-100-line-chart.component";
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
	DataChartStacked100LineChartComponent
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
