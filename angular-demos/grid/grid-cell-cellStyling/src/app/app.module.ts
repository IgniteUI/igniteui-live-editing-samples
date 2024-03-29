import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxButtonModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { GridConditionalCellStyle2Component } from "./grid/grid-conditional-cell-style-2/grid-conditional-cell-style-2.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridConditionalCellStyle2Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxButtonModule,
	IgxInputGroupModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
