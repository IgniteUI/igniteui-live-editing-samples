import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AnimationsSampleComponent } from "./animations-sample-1/animations-sample-1.component";
import { 
	IgxDialogModule,
	IgxButtonModule,
	IgxListModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	AnimationsSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxListModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
