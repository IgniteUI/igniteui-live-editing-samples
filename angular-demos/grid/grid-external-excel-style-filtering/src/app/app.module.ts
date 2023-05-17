import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridExternalExcelStyleFilteringComponent } from "./grid/grid-external-excel-style-filtering/grid-external-excel-style-filtering.component";
import { 
	IgxGridModule,
	IgxSelectModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridExternalExcelStyleFilteringComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxSelectModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
