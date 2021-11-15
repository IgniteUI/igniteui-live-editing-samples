import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TreeGridActionStripSampleComponent } from "./tree-grid/tree-grid-action-strip/tree-grid-action-strip-sample";
import { 
	IgxTreeGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxActionStripModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridActionStripSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxActionStripModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
