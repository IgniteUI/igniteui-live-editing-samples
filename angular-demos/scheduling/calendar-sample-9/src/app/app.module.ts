import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxCalendarModule
 } from "igniteui-angular";
import { CalendarSample9Component } from "./calendar-sample-9/calendar-sample-9.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CalendarSample9Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxCalendarModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
