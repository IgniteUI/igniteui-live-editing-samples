import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxPivotGridModule,
	IgxExcelExporterService
 } from "igniteui-angular";
import { PivotExportComponent } from "./pivot-grid/pivot-export/pivot-export.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PivotExportComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxPivotGridModule
],
  providers: [IgxExcelExporterService],
  schemas: []
})
export class AppModule {}
