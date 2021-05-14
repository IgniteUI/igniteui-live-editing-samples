import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDatePickerModule,
	IgxIconModule
 } from "igniteui-angular";
import { DatepickerStylingSampleComponent } from "./scheduling/datepicker/datepicker-styling-sample/datepicker-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DatepickerStylingSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDatePickerModule,
	IgxIconModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
