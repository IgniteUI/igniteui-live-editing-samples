import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxHierarchicalGridModule,
	IgxButtonModule,
	IgxIconModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { HierarchicalGridPagerSampleComponent } from "./hierarchical-grid/hierarchical-grid-pager-sample/hierarchical-grid-pager-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HierarchicalGridPagerSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxButtonModule,
	IgxIconModule,
	IgxSwitchModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
