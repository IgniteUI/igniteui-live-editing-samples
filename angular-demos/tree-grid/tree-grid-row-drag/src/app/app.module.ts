import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxButtonModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxDragDropModule
 } from "igniteui-angular";
import { TreeGridRowDragComponent } from "./tree-grid-row-drag/tree-grid-row-drag.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridRowDragComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxButtonModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxDragDropModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
