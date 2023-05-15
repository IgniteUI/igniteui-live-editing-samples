import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxAvatarModule } from "igniteui-angular";
import { AvatarCSSVariablesComponent } from "./avatar-css-variables/avatar-css-variables.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	AvatarCSSVariablesComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxAvatarModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
