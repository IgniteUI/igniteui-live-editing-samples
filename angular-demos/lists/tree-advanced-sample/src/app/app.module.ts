import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxTreeModule,
	IgxIconModule,
	IgxTooltipModule
 } from "igniteui-angular";
import { TreeAdvancedSampleComponent } from "./lists/tree/tree-advanced-sample/tree-advanced-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeAdvancedSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxTreeModule,
	IgxIconModule,
	IgxTooltipModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
