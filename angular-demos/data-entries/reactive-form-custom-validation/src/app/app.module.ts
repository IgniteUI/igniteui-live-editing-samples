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
import { ReactiveFormCustomValidationComponent } from "./input-group/reactive-form-custom-validation/reactive-form-custom-validation.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ReactiveFormCustomValidationComponent
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
  entryComponents: [],
  schemas: []
})
export class AppModule {}
