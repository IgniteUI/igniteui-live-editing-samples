import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxTreeModule,
	IgxIconModule
 } from "igniteui-angular";
import { TreeBasicSampleComponent } from "./lists/tree/tree-basic-sample/tree-basic-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TreeBasicSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxTreeModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
