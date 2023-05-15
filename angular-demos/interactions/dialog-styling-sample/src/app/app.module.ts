import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxDialogModule,
	IgxRippleModule,
	IgxIconModule,
	IgxToggleModule
 } from "igniteui-angular";
import { DialogStylingSampleComponent } from "./dialog/dialog-styling-sample/dialog-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DialogStylingSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxDialogModule,
	IgxRippleModule,
	IgxIconModule,
	IgxToggleModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
