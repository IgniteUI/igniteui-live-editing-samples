import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { GridEditingLifecycleComponent } from "./grid/grid-editing-lifecycle-sample/grid-editing-lifecycle.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridEditingLifecycleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
