import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DateTimePickerRFSampleComponent } from "./scheduling/datepicker/reactive-form/reactive-form.component";
import { 
	IgxDatePickerModule,
	IgxTimePickerModule
 } from "igniteui-angular";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DateTimePickerRFSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDatePickerModule,
	IgxTimePickerModule,
	ReactiveFormsModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
