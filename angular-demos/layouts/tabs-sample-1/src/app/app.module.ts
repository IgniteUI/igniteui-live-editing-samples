import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxTabsModule
 } from "igniteui-angular";
import { TabsSample1Component } from "./tabs-sample-1/tabs-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TabsSample1Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxIconModule,
	IgxTabsModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
