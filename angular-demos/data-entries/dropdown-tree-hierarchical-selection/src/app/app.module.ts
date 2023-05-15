import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxTreeModule,
	IgxChipsModule
 } from "igniteui-angular";
import { DropdownTreeHierarchicalSelectionComponent } from "./dropdown-tree-hierarchical-selection/dropdown-tree-hierarchical-selection.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DropdownTreeHierarchicalSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxTreeModule,
	IgxChipsModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
