import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxTreeGridModule } from "igniteui-angular";
import { TreeGridValidationStyleComponent } from "./tree-grid-validation-style/tree-grid-validation-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridValidationStyleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}