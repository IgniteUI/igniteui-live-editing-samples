import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AnimationsSample2Component } from "./animations-sample-2/animations-sample-2.component";
import { 
	IgxCardModule,
	IgxButtonModule,
	IgxIconModule,
	IgxDividerModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	AnimationsSample2Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxCardModule,
	IgxButtonModule,
	IgxIconModule,
	IgxDividerModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
