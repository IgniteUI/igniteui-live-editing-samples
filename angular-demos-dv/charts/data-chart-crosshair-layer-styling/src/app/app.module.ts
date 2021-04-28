import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartCrosshairLayerStylingComponent } from "./crosshair-layer-styling/data-chart-crosshair-layer-styling.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule,
	IgxDataChartAnnotationModule,
	IgxCrosshairLayerModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartCrosshairLayerStylingComponent
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
	IgxCrosshairLayerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
