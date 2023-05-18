import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { PinningToolbarSampleComponent } from "./grid/grid-sample-pinning/grid-toolbar-pinning.component";
import { 
	IgxGridModule,
	IgxIconModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { RouterModule } from "@angular/router";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PinningToolbarSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxIconModule,
	RouterModule,
	RouterModule.forRoot([])
],
  providers: [],
  schemas: []
})
export class AppModule {}
