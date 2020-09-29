import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartSeriesHighlightingComponent } from "./data-chart-series-highlighting/data-chart-series-highlighting.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartCategoryModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SharedData } from "./SharedData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartSeriesHighlightingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SharedData],
  entryComponents: []
})
export class AppModule {}
