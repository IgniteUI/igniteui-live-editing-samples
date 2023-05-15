import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxExcelExporterService
 } from "igniteui-angular";
import { HGridMultiColumnHeadersExportComponent } from "./hierarchical-grid/hierarchical-grid-multi-column-headers-export/hierarchical-grid-multi-column-export.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridMultiColumnHeadersExportComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule
],
  providers: [IgxExcelExporterService],
  schemas: []
})
export class AppModule {}
