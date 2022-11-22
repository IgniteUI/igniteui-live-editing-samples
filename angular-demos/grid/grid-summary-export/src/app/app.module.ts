import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxExcelExporterService
 } from "igniteui-angular";
import { GridSummaryExportComponent } from "./grid/grid-summary-export/grid-summary-export.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridSummaryExportComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule
],
  providers: [IgxExcelExporterService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
