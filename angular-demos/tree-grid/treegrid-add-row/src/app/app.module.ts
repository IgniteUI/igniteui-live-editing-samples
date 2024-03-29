import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxIconModule,
	IgxActionStripModule
 } from "igniteui-angular";
import { TreeGridAddRowSampleComponent } from "./tree-grid-add-row-sample/tree-grid-add-row-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridAddRowSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxIconModule,
	IgxActionStripModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
