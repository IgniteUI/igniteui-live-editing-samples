import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxComboModule,
	IgxSimpleComboModule
 } from "igniteui-angular";
import { GridCascadingCombosComponent } from "./grid/grid-cascading-combos/grid-cascading-combos.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridCascadingCombosComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxComboModule,
	IgxSimpleComboModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
