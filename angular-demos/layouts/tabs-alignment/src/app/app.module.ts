import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonGroupModule,
	IgxIconModule,
	IgxTabsModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { TabsAlignmentComponent } from "./tabs-alignment/tabs-alignment.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TabsAlignmentComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonGroupModule,
	IgxIconModule,
	IgxTabsModule,
	IgxButtonModule,
	IgxRippleModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
