import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartRadialAreaChartStylingComponent } from "./radial-area-chart-styling/data-chart-radial-area-chart-styling.component";
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
	DataChartRadialAreaChartStylingComponent
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
