import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxCardModule,
	IgcFormsModule,
	IgxIconModule
 } from "igniteui-angular";
import { RatingInFormComponent } from "./data-entries/rating/rating-form/rating-form.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	RatingInFormComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxCardModule,
	IgcFormsModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
