import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule,
	IgxIconButtonDirective
 } from "igniteui-angular";
import { OutlinedIconButtonComponent } from "./outlined-icon-button/outlined-icon-button.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	OutlinedIconButtonComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule,
	IgxIconButtonDirective
],
  providers: [],
  schemas: []
})
export class AppModule {}
