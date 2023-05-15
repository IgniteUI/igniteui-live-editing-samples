import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridAddRowSampleComponent } from "./grid/grid-add-row-sample/grid-add-row-sample.component";
import { 
	IgxGridModule,
	IgxActionStripModule,
	IgxInputGroupModule,
	IgxFocusModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridAddRowSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxActionStripModule,
	IgxInputGroupModule,
	IgxFocusModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
