import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxTabsModule,
	IgxButtonGroupModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { TabsHeaderPrefixSuffixComponent } from "./tabs-header-prefix-suffix/tabs-header-prefix-suffix";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TabsHeaderPrefixSuffixComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxIconModule,
	IgxTabsModule,
	IgxButtonGroupModule,
	IgxButtonModule,
	IgxRippleModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
