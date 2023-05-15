import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxDividerModule,
	IgxLayoutModule
 } from "igniteui-angular";
import { CardSample2Component } from "./card-sample-2/card-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CardSample2Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxDividerModule,
	IgxLayoutModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
