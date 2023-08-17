import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxBadgeModule,
	IgxDropDownModule,
	IgxToggleModule
 } from "igniteui-angular";
import { GridGroupByCustomSampleComponent } from "./grid/grid-groupby-custom-sample/grid-groupby-custom-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridGroupByCustomSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxBadgeModule,
	IgxDropDownModule,
	IgxToggleModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
