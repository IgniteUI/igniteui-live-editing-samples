import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { BootstrapComponent } from "./bootstrap-sample.component";
import { 
	IgxAvatarModule,
	IgxCardModule,
	IgxButtonModule,
	IgxIconModule,
	IgxDialogModule,
	IgxListModule
 } from "igniteui-angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	BootstrapComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxAvatarModule,
	IgxCardModule,
	IgxButtonModule,
	IgxIconModule,
	IgxDialogModule,
	IgxListModule,
	NgbModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
