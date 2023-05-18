import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { ComboFeaturesComponent } from "./combo-features/combo-features.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ComboFeaturesComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxComboModule,
	IgxSwitchModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
