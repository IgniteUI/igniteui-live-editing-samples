import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { StepperLabelPositionAndOrientationSampleComponent } from "./stepper-label-position-and-orientation-sample/stepper-label-position-and-orientation-sample.component";
import { 
	IgxStepperModule,
	IgxButtonModule,
	IgxButtonGroupModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	StepperLabelPositionAndOrientationSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxStepperModule,
	IgxButtonModule,
	IgxButtonGroupModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
