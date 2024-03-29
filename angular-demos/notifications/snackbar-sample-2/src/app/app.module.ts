import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxRippleModule,
	IgxIconModule,
	IgxSnackbarModule
 } from "igniteui-angular";
import { SnackbarSample2Component } from "./snackbar-sample-2/snackbar-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SnackbarSample2Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxSnackbarModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
