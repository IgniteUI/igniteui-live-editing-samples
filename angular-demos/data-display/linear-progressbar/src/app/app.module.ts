import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxProgressBarModule } from "igniteui-angular";
import { LinearProgressbarComponent } from "./linear-progressbar/linear-progressbar.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	LinearProgressbarComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxProgressBarModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
