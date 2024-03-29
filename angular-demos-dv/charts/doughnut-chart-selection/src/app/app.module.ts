import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DoughnutChartSelectionSampleComponent } from "./doughnut-chart-selection-sample/doughnut-chart-selection-sample.component";
import { 
	IgxDoughnutChartModule,
	IgxRingSeriesModule,
	IgxLegendModule,
	IgxItemLegendModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DoughnutChartSelectionSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDoughnutChartModule,
	IgxRingSeriesModule,
	IgxLegendModule,
	IgxItemLegendModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
