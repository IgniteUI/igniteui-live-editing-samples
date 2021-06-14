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
	IgxTimePickerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
