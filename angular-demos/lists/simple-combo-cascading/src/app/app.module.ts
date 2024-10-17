import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxSimpleComboModule,
	IgxProgressBarModule
 } from "igniteui-angular";
import { SimpleComboCascadingComponent } from "./lists/combo/simple-combo-cascading/simple-combo-cascading.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SimpleComboCascadingComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxComboModule,
	IgxSimpleComboModule,
	IgxProgressBarModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
