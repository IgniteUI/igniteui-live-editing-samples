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
	IgxDragDropModule,
	IgxIconModule
 } from "igniteui-angular";
import { TreeGridRowDragBaseComponent } from "./tree-grid-row-drag-base/tree-grid-row-drag-base.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridRowDragBaseComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxButtonModule,
	IgxInputGroupModule,
	IgxDragDropModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
