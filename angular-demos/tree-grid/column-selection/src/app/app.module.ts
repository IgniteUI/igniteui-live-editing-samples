import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TreeGridColumnSelectionComponent } from "./tree-grid/column-selection/tree-grid-column-selection.component";
import { 
	IgxTreeGridModule,
	IgxInputGroupModule,
	IgxSelectModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridColumnSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxTreeGridModule,
	IgxPreventDocumentScrollModule,
	IgxInputGroupModule,
	IgxSelectModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
