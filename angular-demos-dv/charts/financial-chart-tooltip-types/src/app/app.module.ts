import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartTooltipTypesComponent } from "./tooltip-types/financial-chart-tooltip-types.component";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./services/generate-hourly-prices.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	FinancialChartTooltipTypesComponent
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
