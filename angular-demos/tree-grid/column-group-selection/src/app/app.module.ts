import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TreeGridColumnGroupSelectionComponent } from "./tree-grid/column-group-selection/column-group-selection.component";
import { IgxTreeGridModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridColumnGroupSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxTreeGridModule,
	IgxPreventDocumentScrollModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
