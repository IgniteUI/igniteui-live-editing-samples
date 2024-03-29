import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TreeGridColumnSelectionStylesComponent } from "./tree-grid/column-selection-styles/tree-grid-column-selection-style.component";
import { IgxTreeGridModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridColumnSelectionStylesComponent
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
