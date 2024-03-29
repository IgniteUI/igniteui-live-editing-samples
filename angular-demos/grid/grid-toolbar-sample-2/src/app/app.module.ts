import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridToolbarSample2Component } from "./grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { 
	IgxAvatarModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxExcelExporterService,
	IgxCsvExporterService,
	IgxInputGroupModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridToolbarSample2Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxAvatarModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxInputGroupModule
],
  providers: [
	IgxExcelExporterService,
	IgxCsvExporterService
],
  schemas: []
})
export class AppModule {}
