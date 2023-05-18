import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { TGridEditingLifecycleComponent } from "./tgrid-editing-lifecycle-sample/tgrid-editing-lifecycle.component";
import { 
	IgxTreeGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TGridEditingLifecycleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxButtonModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
