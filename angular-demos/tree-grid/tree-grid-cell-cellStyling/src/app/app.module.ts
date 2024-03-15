import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxButtonModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { TreeGridConditionalCellStyle2Component } from "./tree-grid/tree-grid-conditional-cell-style-2/tree-grid-conditional-cell-style-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridConditionalCellStyle2Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxButtonModule,
	IgxInputGroupModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
