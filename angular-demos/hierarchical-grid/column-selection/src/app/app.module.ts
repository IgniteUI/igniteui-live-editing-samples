import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HierarchicalGridColumnSelectionComponent } from "./hierarchical-grid/column-selection/hierarchical-grid-column-selection.component";
import { 
	IgxHierarchicalGridModule,
	IgxSelectModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HierarchicalGridColumnSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxHierarchicalGridModule,
	IgxPreventDocumentScrollModule,
	IgxSelectModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
