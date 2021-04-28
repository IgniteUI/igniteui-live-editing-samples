import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartRangeColumnChartComponent } from "./range-column-chart/data-chart-range-column-chart.component";
import { 
	IgxDataChartCoreModule,
	IgxLegendModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartRangeColumnChartComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxLegendModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
