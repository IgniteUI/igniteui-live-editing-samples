import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxSelectModule
 } from "igniteui-angular";
import { MaterialIconsExtendedComponent } from "./material-icons-extended/material-icons-extended.component";
import { 
	CategoriesFilterPipe,
	FilterByName
 } from "./material-icons-extended/material-icons-extended.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	MaterialIconsExtendedComponent,
	CategoriesFilterPipe,
	FilterByName
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxSelectModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
