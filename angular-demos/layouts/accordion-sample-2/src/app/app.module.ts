import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AccordionSample2Component } from "./accordion-sample-2/accordion-sample-2.component";
import { 
	IgxAccordionModule,
	IgxSwitchModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	AccordionSample2Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxAccordionModule,
	IgxSwitchModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
