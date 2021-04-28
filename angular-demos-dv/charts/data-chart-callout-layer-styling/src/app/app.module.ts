import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartCalloutLayerStylingComponent } from "./callout-layer-styling/data-chart-callout-layer-styling.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule,
	IgxDataChartAnnotationModule,
	IgxCalloutLayerModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartCalloutLayerStylingComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule,
	IgxDataChartAnnotationModule,
	IgxCalloutLayerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
