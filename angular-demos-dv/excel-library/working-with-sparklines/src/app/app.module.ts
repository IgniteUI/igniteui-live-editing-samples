import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxGridModule
 } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { ExcelUtility } from "./utilities/excel-utility";
import { ExcelLibraryWorkingWithSparklinesComponent } from "./excel-library/working-with/sparklines.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ExcelLibraryWorkingWithSparklinesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxCategoryChartModule,
		IgxGridModule,
		IgxExcelModule,
		IgxDataChartCategoryModule,
		IgxDataChartCoreModule,
		IgxDataChartInteractivityModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
