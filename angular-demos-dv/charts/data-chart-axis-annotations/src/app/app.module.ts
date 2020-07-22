import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartAxisAnnotationsComponent } from "./data-chart-axis-annotations/data-chart-axis-annotations.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxDataChartAnnotationModule,
	IgxCalloutLayerModule,
	IgxFinalValueLayerModule,
	IgxCrosshairLayerModule
 } from "igniteui-angular-charts";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartAxisAnnotationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxDataChartInteractivityModule,
		IgxDataChartAnnotationModule,
		IgxCalloutLayerModule,
		IgxFinalValueLayerModule,
		IgxCrosshairLayerModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
