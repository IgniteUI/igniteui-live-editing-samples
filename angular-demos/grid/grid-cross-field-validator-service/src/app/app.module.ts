import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridValidatorServiceCrossFieldComponent } from "./grid/grid-validator-service-cross-field/grid-validator-service-cross-field.component";
import { 
	IgxGridModule,
	IgxTooltipModule,
	IgxFocusModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridValidatorServiceCrossFieldComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxFocusModule,
	IgxTooltipModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
