import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridSummaryTemplateComponent } from "./grid/grid-summary-template/grid-summary-template.component";
import { 
	IgxGridModule,
	IgxInputGroupModule,
	IgxButtonGroupModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridSummaryTemplateComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxInputGroupModule,
	IgxButtonGroupModule,
	IgxSwitchModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
