import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxNavbarModule
 } from "igniteui-angular";
import { NavbarCustomTitleComponent } from "./navbar-custom-title/navbar-custom-title.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		NavbarCustomTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxNavbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
