import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DoughnutChartAnimationSampleComponent } from "./doughnut-chart-animation-sample/doughnut-chart-animation-sample.component";
import { 
	IgxDoughnutChartModule,
	IgxRingSeriesModule
 } from "igniteui-angular-charts";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DoughnutChartAnimationSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDoughnutChartModule,
		IgxRingSeriesModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
