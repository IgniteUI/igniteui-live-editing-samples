import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxSliderModule
 } from "igniteui-angular";
import { SliderTicksBottomtotopLabelsComponent } from "./slider-ticks-bottomtotop-labels/slider-ticks-bottomtotop-labels.component";
import { HammerModule } from "@angular/platform-browser";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SliderTicksBottomtotopLabelsComponent
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
  schemas: []
})
export class AppModule {}
