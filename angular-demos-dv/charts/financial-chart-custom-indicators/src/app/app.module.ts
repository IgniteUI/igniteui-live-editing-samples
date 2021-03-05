import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartCustomIndicatorsComponent } from "./custom-indicators/financial-chart-custom-indicators.component";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./services/generate-hourly-prices.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	FinancialChartCustomIndicatorsComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxFinancialChartModule
],
  providers: [FinancialDataService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
