import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartCompositeChartComponent } from "./composite-chart/data-chart-composite-chart.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxLegendModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DataChartCompositeChartComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxLegendModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
