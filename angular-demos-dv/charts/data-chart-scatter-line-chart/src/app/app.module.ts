import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartScatterLineChartComponent } from "./scatter-line-chart/data-chart-scatter-line-chart.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartScatterLineChartComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartScatterModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartInteractivityModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
