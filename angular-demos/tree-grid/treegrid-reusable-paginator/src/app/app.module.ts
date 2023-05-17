import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxIconModule,
	IgxSwitchModule,
	IgxSelectModule
 } from "igniteui-angular";
import { TreeGridPagerSampleComponent } from "./tree-grid-pager-sample/tree-grid-pager-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridPagerSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxIconModule,
	IgxSwitchModule,
	IgxSelectModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
