import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDividerModule } from "igniteui-angular";
import { DividerVerticalComponent } from "./vertical/divider-vertical.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DividerVerticalComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDividerModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
