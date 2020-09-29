import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartTitlesComponent } from "./titles/financial-chart-titles.component";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { StockDataService } from "./services/stock-data.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		FinancialChartTitlesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxFinancialChartModule
  ],
  providers: [StockDataService],
  entryComponents: []
})
export class AppModule {}
