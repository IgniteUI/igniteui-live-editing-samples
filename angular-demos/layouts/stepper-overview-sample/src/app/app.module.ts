import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { StepperOverviewSampleComponent } from "./stepper-overview-sample/stepper-overview-sample.component";
import { 
	IgxStepperModule,
	IgxMaskModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRadioModule,
	IgxCardModule,
	IgxCheckboxModule,
	IgxSelectModule,
	IgxIconModule,
	IgxBadgeModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	StepperOverviewSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxStepperModule,
	IgxMaskModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRadioModule,
	IgxCardModule,
	IgxCheckboxModule,
	IgxSelectModule,
	IgxIconModule,
	IgxBadgeModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
