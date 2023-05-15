import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { ReactiveFormValidationComponent } from "./input-group/reactive-form-validation/reactive-form-validation.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ReactiveFormValidationComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRippleModule,
	ReactiveFormsModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
