import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartStackedSplineAreaChartComponent } from "./stacked-spline-area-chart/data-chart-stacked-spline-area-chart.component";
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
	DataChartStackedSplineAreaChartComponent
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
