import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCheckboxModule,
	IgxSliderModule,
	IgxRadioModule,
	IgxTimePickerModule,
	IgxAccordionModule
 } from "igniteui-angular";
import { AccordionSample3Component } from "./accordion-sample-3/accordion-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	AccordionSample3Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxCheckboxModule,
	IgxSliderModule,
	IgxRadioModule,
	IgxTimePickerModule,
	IgxAccordionModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
