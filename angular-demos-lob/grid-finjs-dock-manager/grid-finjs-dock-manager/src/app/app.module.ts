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
import { GridFinJSDockManagerComponent } from "./grid-finjs-dock-manager/grid-finjs-dock-manager.component";
import { HttpClientModule } from "@angular/common/http";
import { SignalRService } from "./services/signal-r.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FloatingPanesService } from "./services/floating-panes.service";
import { DockSlotComponent } from "./grid-finjs-dock-manager/dock-slot.component";

import { defineCustomElements } from 'igniteui-dockmanager/loader';
defineCustomElements();


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridFinJSDockManagerComponent,
	DockSlotComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxButtonGroupModule,
	IgxIconModule,
	IgxSliderModule,
	IgxToggleModule,
	IgxButtonModule,
	IgxSwitchModule,
	IgxRippleModule,
	IgxCategoryChartModule,
	IgxDialogModule,
	IgxToastModule,
	HttpClientModule
],
  providers: [
	IgxExcelExporterService,
	IgxCsvExporterService,
	SignalRService,
	FloatingPanesService
],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
