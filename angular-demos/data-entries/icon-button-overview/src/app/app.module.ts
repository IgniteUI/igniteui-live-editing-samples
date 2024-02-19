import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule,
	IgxIconButtonDirective
 } from "igniteui-angular";
import { IconButtonOverviewComponent } from "./icon-button-overview/icon-button-overview.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	IconButtonOverviewComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule,
	IgxIconButtonDirective
],
  providers: [],
  schemas: []
})
export class AppModule {}
