import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxCheckboxModule,
	IgxDatePickerModule,
	IgxActionStripModule
 } from "igniteui-angular";
import { HGridAddRowSampleComponent } from "./hierarchical-grid/hierarchical-grid-add-row/hierarchical-grid-add-row.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridAddRowSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxCheckboxModule,
	IgxDatePickerModule,
	IgxActionStripModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
