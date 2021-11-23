import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { StepperLinearSampleComponent } from "./stepper-linear-sample/stepper-linear-sample.component";
import { 
	IgxStepperModule,
	IgxIconModule,
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxInputGroupModule,
	IgxRadioModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	StepperLinearSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxStepperModule,
	IgxIconModule,
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxInputGroupModule,
	IgxRadioModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
