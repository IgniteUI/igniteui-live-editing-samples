import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDateRangePickerModule,
	IgxDatePickerModule,
	IgxDateTimeEditorModule,
	IgxInputGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { DateRangePickerStartEndComponent } from "./daterangepicker-start-end/daterangepicker-start-end";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DateRangePickerStartEndComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDateRangePickerModule,
	IgxDatePickerModule,
	IgxDateTimeEditorModule,
	IgxInputGroupModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
