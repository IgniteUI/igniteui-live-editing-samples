import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxButtonModule,
	IgxCardModule,
	IgxIconModule
 } from "igniteui-angular";
import { IconServiceSampleComponent } from "./icon-service-sample/icon-service-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	IconStylingSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxAvatarModule,
	IgxButtonModule,
	IgxCardModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
