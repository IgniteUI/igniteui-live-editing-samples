import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxSliderModule
 } from "igniteui-angular";
import { SliderSample3Component } from "./slider-sample-3/slider-sample-3.component";
import { HammerModule } from "@angular/platform-browser";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SliderSample3Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxInputGroupModule,
	IgxSliderModule,
	HammerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
