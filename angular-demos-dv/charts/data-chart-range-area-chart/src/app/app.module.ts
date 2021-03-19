import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartRangeAreaChartComponent } from "./range-area-chart/data-chart-range-area-chart.component";
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
	DataChartRangeAreaChartComponent
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
