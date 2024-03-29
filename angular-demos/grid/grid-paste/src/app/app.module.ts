import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxExcelExporterService,
	IgxDropDownComponent,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";
import { GridPasteSampleComponent } from "./grid/grid-paste-sample.component";
import { PasteHandler } from "./grid/paste-handler.directive";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridPasteSampleComponent,
	PasteHandler
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxGridModule,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxPreventDocumentScrollModule
],
  providers: [IgxExcelExporterService],
  schemas: []
})
export class AppModule {}
