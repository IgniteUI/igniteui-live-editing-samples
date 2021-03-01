import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { TreeGridCellSelectionComponent } from "./tree-grid/tree-grid-cellSelection-sample/tree-grid-cellSelection.component";
import { 
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxButtonGroupModule,
	IgxAvatarModule,
	IgxTreeGridModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridCellSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxIconModule,
	IgxSwitchModule,
	IgxButtonGroupModule,
	IgxAvatarModule,
	IgxTreeGridModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
