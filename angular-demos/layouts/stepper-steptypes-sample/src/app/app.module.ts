import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { StepperStepTypesSampleComponent } from "./stepper-steptypes-sample/stepper-steptypes-sample.component";
import { 
	IgxStepperModule,
	IgxButtonGroupModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	StepperStepTypesSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxStepperModule,
	IgxButtonGroupModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
