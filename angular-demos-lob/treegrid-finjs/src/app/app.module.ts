import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxButtonGroupModule,
	IgxIconModule,
	IgxSliderModule,
	IgxToggleModule,
	IgxButtonModule,
	IgxExcelExporterService,
	IgxSwitchModule,
	IgxRippleModule
 } from "igniteui-angular";
import { TreeGridFinJSComponent } from "./treegrid-finjs/tree-grid-finjs-sample.component";
import { FinancialDataService } from "./services/financial.service";
import { TreeGridGroupingPipe } from "./treegrid-finjs/tree-grid-grouping.pipe";
import { HttpClientModule } from "@angular/common/http";
import { SignalRService } from "./services/signal-r.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridFinJSComponent,
	TreeGridGroupingPipe
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxButtonGroupModule,
	IgxIconModule,
	IgxSliderModule,
	IgxToggleModule,
	IgxButtonModule,
	IgxSwitchModule,
	IgxRippleModule,
	HttpClientModule
],
  providers: [
	FinancialDataService,
	IgxExcelExporterService,
	SignalRService
],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
