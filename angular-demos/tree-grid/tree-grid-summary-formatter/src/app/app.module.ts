import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TreeGridSummaryFormatterComponent } from "./tree-grid-summary-formatter/tree-grid-summary-formatter.component";
import { IgxTreeGridModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridSummaryFormatterComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
