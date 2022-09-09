import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HierarchicalGridValidatorServiceCrossCellComponent } from "./hierarchical-grid/hierarchical-grid-cross-field-validation/hierarchical-grid-cross-field-validation.component";
import { IgxHierarchicalGridModule } from "igniteui-angular";
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
	IgxTooltipModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
