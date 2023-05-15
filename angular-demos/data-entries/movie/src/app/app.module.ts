import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAutocompleteModule,
	IgxDropDownModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { MovieComponent } from "./data-entries/autocomplete/movie/movie.component";
import { AutocompletePipeStartsWith2 } from "./data-entries/autocomplete/movie/movie.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	MovieComponent,
	AutocompletePipeStartsWith2
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxAutocompleteModule,
	IgxDropDownModule,
	IgxInputGroupModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
