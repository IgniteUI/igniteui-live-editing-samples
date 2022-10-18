import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxSliderModule } from "igniteui-angular";
import { TickLabelsTemplateComponent } from "./slider-tick-labels-template/tick-labels-template.component";
import { HammerModule } from "@angular/platform-browser";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TickLabelsTemplateComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxSliderModule,
	HammerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
