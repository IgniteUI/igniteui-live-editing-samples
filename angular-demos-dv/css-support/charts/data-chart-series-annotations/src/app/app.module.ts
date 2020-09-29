import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartSeriesAnnotationsComponent } from "./data-chart-series-annotations/data-chart-series-annotations.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartAnnotationModule,
	IgxCalloutLayerModule,
	IgxCrosshairLayerModule,
	IgxFinalValueLayerModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartSeriesAnnotationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxDataChartAnnotationModule,
		IgxCalloutLayerModule,
		IgxCrosshairLayerModule,
		IgxFinalValueLayerModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SharedData],
  entryComponents: []
})
export class AppModule {}
