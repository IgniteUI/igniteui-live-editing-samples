import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPivotGridModule } from "igniteui-angular";
import { PivotDataSelectorSampleComponent } from "./pivot-grid/pivot-datasource/pivot-data-selector-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PivotDataSelectorSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxPivotGridModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
