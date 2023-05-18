import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule
 } from "igniteui-angular";
import { ButtonsRoundnessComponent } from "./buttons-roundness-sample/buttons-roundness-sample";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ButtonsRoundnessComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
