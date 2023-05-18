import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxListModule,
	IgxRippleModule
 } from "igniteui-angular";
import { ListSample6Component } from "./list-sample-6/list-sample-6.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ListSample6Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxListModule,
	IgxRippleModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
