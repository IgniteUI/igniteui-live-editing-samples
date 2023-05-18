import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDateRangePickerModule } from "igniteui-angular";
import { DateRangePickerRangeButtonsComponent } from "./daterangepicker-range-buttons/daterangepicker-range-buttons";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DateRangePickerRangeButtonsComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDateRangePickerModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
