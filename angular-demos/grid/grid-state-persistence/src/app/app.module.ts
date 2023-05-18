import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridStatePersistenceSampleComponent } from "./grid/grid-state-persistence-sample/grid-state-persistance-sample.component";
import { 
	IgxAvatarModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxButtonModule,
	IgxExcelExporterService,
	IgxCsvExporterService
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { FinancialDataService } from "./services/financial.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridStatePersistenceSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxAvatarModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxButtonModule
],
  providers: [FinancialDataService],
  schemas: []
})
export class AppModule {}
