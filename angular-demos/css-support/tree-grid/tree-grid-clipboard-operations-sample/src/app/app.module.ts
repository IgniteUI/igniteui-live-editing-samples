import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { TreeGridClipboardSampleComponent } from "./tree-grid-clipboard-operations-sample/tree-grid-clipboard-operations-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridClipboardSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxSwitchModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
