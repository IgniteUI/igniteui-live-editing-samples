import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartIndicatorTypesComponent } from "./indicator-types/financial-chart-indicator-types.component";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { FinancialDataService } from "./services/financial-data.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		FinancialChartIndicatorTypesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxFinancialChartModule
  ],
  providers: [FinancialDataService],
  entryComponents: []
})
export class AppModule {}
