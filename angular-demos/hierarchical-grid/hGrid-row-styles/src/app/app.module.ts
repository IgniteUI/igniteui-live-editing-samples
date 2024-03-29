import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxHierarchicalGridModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";
import { HGridRowStylesSampleComponent } from "./hierarchical-grid/hgrid-rowStyle-sample/hgrid-rowStyles.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridRowStylesSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxIconModule,
	IgxButtonModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
