import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridValidatorServiceComponent } from "./grid/grid-validator-service/grid-validator-service.component";
import { 
	IgxGridModule,
	IgxFocusModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridValidatorServiceComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxFocusModule,
	IgxSwitchModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
