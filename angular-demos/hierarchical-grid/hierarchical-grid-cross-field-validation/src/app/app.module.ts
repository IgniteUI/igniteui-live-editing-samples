import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HierarchicalGridValidatorServiceCrossCellComponent } from "./hierarchical-grid/hierarchical-grid-cross-field-validation/hierarchical-grid-cross-field-validation.component";
import { 
	IgxHierarchicalGridModule,
	IgxTooltipModule
 } from "igniteui-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HierarchicalGridValidatorServiceCrossCellComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxTooltipModule,
	ReactiveFormsModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
