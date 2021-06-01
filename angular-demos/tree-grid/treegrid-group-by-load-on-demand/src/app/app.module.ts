import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxTreeGridModule } from "igniteui-angular";
import { TreeGridGroupByLoadOnDemandComponent } from "./tree-grid/tree-grid-group-by-load-on-demand-sample/tree-grid-group-by-load-on-demand-sample.component";
import { IgxTreeGridGroupAreaComponent } from "./tree-grid/tree-grid-group-by-load-on-demand-sample/tree-grid-group-area.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeGridGroupByLoadOnDemandComponent,
	IgxTreeGridGroupAreaComponent
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
