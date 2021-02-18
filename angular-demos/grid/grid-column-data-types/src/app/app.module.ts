import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridColumnDataTypesSampleComponent } from "./grid/grid-column-data-types-sample/grid-column-data-types-sample.component";
import { 
	IgxGridModule,
	IgxTooltipModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridColumnDataTypesSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxTooltipModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
