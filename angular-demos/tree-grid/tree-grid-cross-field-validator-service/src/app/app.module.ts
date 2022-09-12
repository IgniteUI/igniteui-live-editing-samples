import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxButtonModule,
	IgxTooltipModule
 } from "igniteui-angular";
import { TreeGridValidatorServiceCrossFieldComponent } from "./tree-grid/tree-grid-validator-service-cross-field/tree-grid-validator-service-cross-field.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridValidatorServiceCrossFieldComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxButtonModule,
	IgxTooltipModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
