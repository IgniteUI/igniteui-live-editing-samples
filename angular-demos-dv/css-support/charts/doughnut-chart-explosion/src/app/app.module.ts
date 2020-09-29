import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DoughnutChartExplosionSampleComponent } from "./doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
import { 
	IgxDoughnutChartModule,
	IgxRingSeriesModule
 } from "igniteui-angular-charts";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DoughnutChartExplosionSampleComponent
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
