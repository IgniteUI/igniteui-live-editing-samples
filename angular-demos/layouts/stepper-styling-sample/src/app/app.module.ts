import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { StepperStylingSampleComponent } from "./stepper-styling-sample/stepper-styling-sample.component";
import { 
	IgxStepperModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	StepperStylingSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxStepperModule,
	IgxIconModule,
	IgxButtonModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
