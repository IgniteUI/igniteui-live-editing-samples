import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxCategoryChartModule } from "igniteui-angular-charts";
import { 
	IgxGridModule,
	IgxButtonGroupModule,
	IgxFocusModule,
	IgxIconModule,
	IgxSliderModule,
	IgxToggleModule,
	IgxButtonModule,
	IgxExcelExporterService,
	IgxCsvExporterService,
	IgxSwitchModule,
	IgxRippleModule,
	IgxDialogModule,
	IgxToastModule
 } from "igniteui-angular";
import { FinJSDemoComponent } from "./grid-finjs/main.component";
import { FinancialDataService } from "./services/financial.service";
import { ControllerComponent } from "./grid-finjs/controllers.component";
import { GridFinJSComponent } from "./grid-finjs/grid-finjs.component";
import { HttpClientModule } from "@angular/common/http";
import { SignalRService } from "./services/signal-r.service";
import { RouterModule } from "@angular/router";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	FinJSDemoComponent,
	ControllerComponent,
	GridFinJSComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxButtonGroupModule,
	IgxFocusModule,
	IgxIconModule,
	IgxSliderModule,
	IgxToggleModule,
	IgxButtonModule,
	IgxSwitchModule,
	IgxRippleModule,
	IgxCategoryChartModule,
	IgxDialogModule,
	IgxToastModule,
	HttpClientModule,
	RouterModule,
	RouterModule.forRoot([])
],
  providers: [
	FinancialDataService,
	IgxExcelExporterService,
	IgxCsvExporterService,
	SignalRService
],
  schemas: []
})
export class AppModule {}
