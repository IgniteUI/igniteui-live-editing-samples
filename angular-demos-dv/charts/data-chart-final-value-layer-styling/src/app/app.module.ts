import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartFinalValueLayerStylingComponent } from "./final-value-layer-styling/data-chart-final-value-layer-styling.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxDataChartAnnotationModule,
	IgxFinalValueLayerModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartFinalValueLayerStylingComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule,
	IgxDataChartAnnotationModule,
	IgxFinalValueLayerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
