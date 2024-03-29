import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxGridModule
 } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts";
import { IgxExcelModule } from "igniteui-angular-excel";
import { ExcelUtility } from "./utilities/excel-utility";
import { ExcelLibraryOverviewComponent } from "./excel-library/overview/overview.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ExcelLibraryOverviewComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxCategoryChartModule,
	IgxGridModule,
	IgxExcelModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
