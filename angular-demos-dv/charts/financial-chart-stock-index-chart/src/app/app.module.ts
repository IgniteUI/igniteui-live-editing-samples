import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartStockIndexChartComponent } from "./stock-index-chart/financial-chart-stock-index-chart.component";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { StockIndexDataService } from "./services/stock-index-data.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	FinancialChartStockIndexChartComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxFinancialChartModule
],
  providers: [StockIndexDataService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
