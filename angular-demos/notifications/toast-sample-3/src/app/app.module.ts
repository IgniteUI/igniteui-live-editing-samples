import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxRippleModule,
	IgxIconModule,
	IgxToastModule
 } from "igniteui-angular";
import { ToastSample3Component } from "./toast-sample-3/toast-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ToastSample3Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxToastModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
