import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxSnackbarModule,
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { HierarchicalGridCellSelectionComponent } from "./hierarchical-grid/hierarchical-grid-cellSelection-sample/hierarchical-grid-cellSelection.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HierarchicalGridCellSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxSnackbarModule,
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
