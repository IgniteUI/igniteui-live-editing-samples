import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxButtonModule
 } from "igniteui-angular";
import { ComboValueKeyComponent } from "./combo-valuekey/combo-valuekey.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ComboValueKeyComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxComboModule,
	IgxButtonModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
