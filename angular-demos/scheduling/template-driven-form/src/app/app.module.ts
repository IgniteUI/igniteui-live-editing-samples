import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DateTimePickerTDFSampleComponent } from "./scheduling/datepicker/template-driven-form/template-driven-form.component";
import { 
	IgxDatePickerModule,
	IgxTimePickerModule
 } from "igniteui-angular";
import { FormsModule } from "@angular/forms";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DateTimePickerTDFSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDatePickerModule,
	IgxTimePickerModule,
	FormsModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
