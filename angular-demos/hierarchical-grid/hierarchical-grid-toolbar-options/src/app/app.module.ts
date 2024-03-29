import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxSwitchModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { HGridToolbarOptionsSampleComponent } from "./hierarchical-grid/hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridToolbarOptionsSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxSwitchModule,
	IgxInputGroupModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
