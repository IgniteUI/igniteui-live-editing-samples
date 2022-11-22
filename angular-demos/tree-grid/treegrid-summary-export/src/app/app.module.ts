import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxIconModule,
	IgxExcelExporterService
 } from "igniteui-angular";
import { TreeGridSummaryExportComponent } from "./tree-grid-summary-export/tree-grid-summary-export.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridSummaryExportComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxIconModule
],
  providers: [IgxExcelExporterService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
