import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxSnackbarModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxSwitchModule,
	IgxButtonGroupModule
 } from "igniteui-angular";
import { GridSelectionSampleComponent } from "./grid/grid-sample-selection/grid-selection.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { FinancialDataService } from "./services/financial.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridSelectionSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxSnackbarModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxSwitchModule,
	IgxButtonGroupModule,
	HttpClientModule
],
  providers: [FinancialDataService],
  schemas: []
})
export class AppModule {}
