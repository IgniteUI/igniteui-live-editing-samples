import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DropdownMultiLevelMenuComponent } from "./dropdown-multi-level-menu/dropdown-multi-level-menu.component";
import { MultiLevelDirective } from "./dropdown-multi-level-menu/multi-level.directive";
import { 
	IgxDropDownModule,
	IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	DropdownMultiLevelMenuComponent,
	MultiLevelDirective
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDropDownModule,
	IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule,
	IgxToggleModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
