import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxGridModule,
	IgxIconModule,
	IgxSelectModule
 } from "igniteui-angular";
import { LocalizationAllResourcesComponent } from "./services/localization-samples/localization-all-resources/localization-all-resources.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	LocalizationAllResourcesComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxInputGroupModule,
	IgxGridModule,
	IgxIconModule,
	IgxSelectModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
