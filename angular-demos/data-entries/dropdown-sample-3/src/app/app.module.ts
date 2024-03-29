import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxPrefixModule,
	IgxSuffixModule,
	IgxIconModule,
	IgxDividerModule
 } from "igniteui-angular";
import { DropDownSample3Component } from "./dropdown-sample-3/dropdown-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DropDownSample3Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxPrefixModule,
	IgxSuffixModule,
	IgxIconModule,
	IgxDividerModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
