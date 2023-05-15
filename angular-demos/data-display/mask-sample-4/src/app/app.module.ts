import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxMaskModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxTextSelectionModule
 } from "igniteui-angular";
import { MaskSample4Component } from "./mask-sample-4/mask-sample-4.component";
import { 
	DisplayFormatPipe,
	InputFormatPipe
 } from "./mask-sample-4/mask-sample-4.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	MaskSample4Component,
	DisplayFormatPipe,
	InputFormatPipe
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxMaskModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxTextSelectionModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
