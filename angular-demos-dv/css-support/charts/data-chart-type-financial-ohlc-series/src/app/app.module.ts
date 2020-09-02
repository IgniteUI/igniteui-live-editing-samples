import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeFinancialOhlcSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxLegendModule,
		IgxIndicatorsModule,
		IgxFinancialPriceSeriesModule,
		IgxDataChartInteractivityModule,
		IgxBollingerBandsOverlayModule,
		IgxNumericXAxisModule,
		IgxNumericYAxisModule,
		IgxCategoryXAxisModule
  ],
  providers: [SampleFinancialData],
  entryComponents: []
})
export class AppModule {}
