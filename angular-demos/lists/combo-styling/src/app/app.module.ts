import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxToastModule
 } from "igniteui-angular";
import { ComboStylingComponent } from "./lists/combo/combo-styling/combo-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ComboStylingComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxComboModule,
	IgxToastModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
