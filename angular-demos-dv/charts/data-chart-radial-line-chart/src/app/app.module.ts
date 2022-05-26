import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartRadialLineChartComponent } from "./radial-line-chart/data-chart-radial-line-chart.component";
import { 
	IgxDataChartCoreModule,
	IgxLegendModule,
	IgxDataChartRadialModule,
	IgxDataChartRadialCoreModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartRadialLineChartComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxLegendModule,
	IgxDataChartRadialModule,
	IgxDataChartRadialCoreModule,
	IgxDataChartInteractivityModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
