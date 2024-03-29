import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartHighVolumeComponent } from "./high-volume/financial-chart-high-volume.component";
import { 
	IgxFinancialChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";
import { GenerateHourlyPricesService } from "./services/generate-hourly-prices.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	FinancialChartHighVolumeComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxFinancialChartModule,
	IgxLegendModule
],
  providers: [GenerateHourlyPricesService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
