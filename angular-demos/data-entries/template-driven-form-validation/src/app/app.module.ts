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
import { TemplateDrivenFormValidationComponent } from "./input-group/template-driven-form-validation/template-driven-form-validation.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TemplateDrivenFormValidationComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRippleModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
