import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxInputGroupModule,
	IgxButtonGroupModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { TreeGridSummaryTemplateComponent } from "./tree-grid/treegrid-summary-template/treegrid-summary-template.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridSummaryTemplateComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxInputGroupModule,
	IgxButtonGroupModule,
	IgxSwitchModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
