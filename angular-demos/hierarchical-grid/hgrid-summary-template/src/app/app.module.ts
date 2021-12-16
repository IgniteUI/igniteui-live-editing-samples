import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxInputGroupModule,
	IgxButtonGroupModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { HGridSummaryTemplateComponent } from "./hierarchical-grid/hgrid-summary-template/hgrid-summary-template.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridSummaryTemplateComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxInputGroupModule,
	IgxButtonGroupModule,
	IgxSwitchModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
