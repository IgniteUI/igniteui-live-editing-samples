import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxTreeGridModule,
	IgxIconModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { TreeGridSummary2SampleComponent } from "./tree-grid-summary2-sample/tree-grid-summary2-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridSummary2SampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxButtonModule,
		IgxButtonGroupModule,
		IgxTreeGridModule,
		IgxIconModule,
		IgxSwitchModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
