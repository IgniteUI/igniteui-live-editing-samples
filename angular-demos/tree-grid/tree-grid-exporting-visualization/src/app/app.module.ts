import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxToggleModule,
	IgxExcelExporterService,
	IgxCsvExporterService
 } from "igniteui-angular";
import { TreeGridExportVisualizationComponent } from "./tree-grid-export-visualization/tree-grid-export-visualization.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridExportVisualizationComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxToggleModule
],
  providers: [
	IgxExcelExporterService,
	IgxCsvExporterService
],
  schemas: []
})
export class AppModule {}
