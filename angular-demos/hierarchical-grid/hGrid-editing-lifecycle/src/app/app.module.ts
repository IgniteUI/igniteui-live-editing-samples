import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { HGridEditingLifecycleComponent } from "./hierarchical-grid/hgrid-editing-lifecycle-sample/hgrid-editing-lifecycle.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridEditingLifecycleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxSwitchModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
