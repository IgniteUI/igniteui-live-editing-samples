import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { PieChartLegendComponent } from "./pie-chart-legend/pie-chart-legend.component";
import { IgxPieChartModule } from "igniteui-angular-charts/ES5/igx-pie-chart-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxItemLegendModule } from "igniteui-angular-charts/ES5/igx-item-legend-module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		PieChartLegendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPieChartModule,
		IgxLegendModule,
		IgxItemLegendModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
