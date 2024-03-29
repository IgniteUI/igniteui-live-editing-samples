import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridActionStripSampleComponent } from "./grid/grid-action-strip/grid-action-strip-sample";
import { 
	IgxGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxFocusModule,
	IgxActionStripModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridActionStripSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxActionStripModule,
	IgxFocusModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
