import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxSliderModule } from "igniteui-angular";
import { SliderPrimaryTicksTopComponent } from "./slider-primary-ticks-top/slider-primary-ticks-top.component";
import { HammerModule } from "@angular/platform-browser";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SliderPrimaryTicksTopComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxSliderModule,
	HammerModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
