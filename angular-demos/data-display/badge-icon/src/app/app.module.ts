import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxBadgeModule,
	IgxAvatarModule
 } from "igniteui-angular";
import { BadgeIconComponent } from "./badge-icon/badge-icon.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	BadgeIconComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxBadgeModule,
	IgxAvatarModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
