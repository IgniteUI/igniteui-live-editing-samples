import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxDatePickerModule,
	IgxTimePickerModule,
	IgxComboModule,
	IgxDropDownModule,
	IgxSelectModule
 } from "igniteui-angular";
import { ReactiveFormsSampleComponent } from "./how-to/reactive-forms/reactive-forms.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ReactiveFormsSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxDatePickerModule,
	IgxTimePickerModule,
	IgxComboModule,
	ReactiveFormsModule,
	IgxDropDownModule,
	IgxSelectModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
