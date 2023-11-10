import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonGroupModule,
	IgxIconModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxRadioModule
 } from "igniteui-angular";
import { ButtonGroupSampleComponent } from "./button-group-sample-4/button-group-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ButtonGroupSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonGroupModule,
	IgxIconModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxRadioModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
