import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { HGridToolbarPinningComponent } from "./hierarchical-grid/hierarchical-grid-column-pinning/hierarchical-grid-toolbar-pinning.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { RouterModule } from "@angular/router";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridToolbarPinningComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	RouterModule,
	RouterModule.forRoot([])
],
  providers: [],
  schemas: []
})
export class AppModule {}
