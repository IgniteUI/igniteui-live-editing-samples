import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCalendarModule,
	IgxPrefixModule,
	IgxSelectModule
 } from "igniteui-angular";
import { CalendarRtlSampleComponent } from "./calendar-rtl-sample/calendar-rtl-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CalendarRtlSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxCalendarModule,
	IgxPrefixModule,
	IgxSelectModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
