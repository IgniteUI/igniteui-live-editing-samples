import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxTreeGridModule,
	IgxChipsModule
 } from "igniteui-angular";
import { DropdownTreeGridHierarchicalSelectionComponent } from "./dropdown-tree-grid-hierarchical-selection/dropdown-tree-grid-hierarchical-selection.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DropdownTreeGridHierarchicalSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxTreeGridModule,
	IgxChipsModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
