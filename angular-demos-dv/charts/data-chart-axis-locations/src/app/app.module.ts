import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DataChartAxisLocationsComponent } from "./data-chart-axis-locations/data-chart-axis-locations.component";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartAxisLocationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxLegendModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
