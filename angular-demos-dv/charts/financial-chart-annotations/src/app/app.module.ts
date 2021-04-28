import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartAnnotationsComponent } from "./annotations/financial-chart-annotations.component";
import { 
	IgxFinancialChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";
import { FinancialDataService } from "./services/generate-hourly-prices.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	FinancialChartAnnotationsComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxFinancialChartModule,
	IgxLegendModule
],
  providers: [FinancialDataService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
