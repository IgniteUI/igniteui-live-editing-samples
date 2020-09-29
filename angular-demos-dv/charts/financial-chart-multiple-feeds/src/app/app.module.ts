import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FinancialChartMultipleFeedsComponent } from "./multiple-feeds/financial-chart-multiple-feeds.component";
import { IgxFinancialChartModule } from "igniteui-angular-charts";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		FinancialChartMultipleFeedsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxFinancialChartModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
