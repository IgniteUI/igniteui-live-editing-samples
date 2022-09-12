import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridValidatorServiceExtendedComponent } from "./grid/grid-validator-service-extended/grid-validator-service-extended.component";
import { 
	IgxGridModule,
	IgxFocusModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridValidatorServiceExtendedComponent,
	ForbiddenValidatorDirective
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxFocusModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
