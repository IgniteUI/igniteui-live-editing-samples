import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartNavigationComponent } from "./data-chart-navigation/data-chart-navigation.component";
import { 
	IgxDataChartCoreModule,
	IgxDataChartScatterCoreModule,
	IgxDataChartScatterModule,
	IgxNumberAbbreviatorModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";
import { SampleScatterStats } from "./SampleScatterStats";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartScatterCoreModule,
		IgxDataChartScatterModule,
		IgxNumberAbbreviatorModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SampleScatterStats],
  entryComponents: []
})
export class AppModule {}
