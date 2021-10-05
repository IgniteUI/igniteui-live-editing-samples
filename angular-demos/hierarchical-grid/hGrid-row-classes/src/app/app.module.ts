import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { HGridRowClassesSampleComponent } from "./hierarchical-grid/hgrid-rowClasses-sample/hgrid-rowClasses.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridRowClassesSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
