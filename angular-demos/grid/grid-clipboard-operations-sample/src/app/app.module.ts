import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridClipboardSampleComponent } from "./grid/grid-clipboard-operations-sample/grid-clipboard-operations-sample.component";
import { 
	IgxGridModule,
	IgxSwitchModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridClipboardSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxButtonModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
