import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HGridActionStripSampleComponent } from "./hierarchical-grid/hierarchical-grid-action-strip/hierarchical-grid-action-strip-sample";
import { 
	IgxHierarchicalGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxActionStripModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridActionStripSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxActionStripModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
