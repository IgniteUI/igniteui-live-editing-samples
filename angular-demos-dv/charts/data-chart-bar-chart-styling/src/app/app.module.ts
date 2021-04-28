import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartBarChartStylingComponent } from "./bar-chart-styling/data-chart-bar-chart-styling.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartAnnotationModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule,
	IgxCalloutLayerModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartBarChartStylingComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartAnnotationModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule,
	IgxCalloutLayerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
