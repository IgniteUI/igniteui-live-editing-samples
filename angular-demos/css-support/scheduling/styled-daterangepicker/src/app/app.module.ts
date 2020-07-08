import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDateRangePickerModule,
	IgxInputGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { StyledDateRangePickerComponent } from "./daterangepicker-styling/daterangepicker-styling";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		StyledDateRangePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDateRangePickerModule,
		IgxInputGroupModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
