import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxTabsModule,
	IgxCardModule,
	IgxAvatarModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { TabsStyleComponent } from "./tabs-style/tabs-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TabsStyleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxIconModule,
	IgxTabsModule,
	IgxCardModule,
	IgxAvatarModule,
	IgxButtonModule,
	IgxRippleModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
