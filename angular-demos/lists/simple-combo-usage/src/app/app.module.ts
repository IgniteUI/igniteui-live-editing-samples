import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxSimpleComboModule
 } from "igniteui-angular";
import { SimpleComboUsageComponent } from "./lists/combo/simple-combo-usage/simple-combo-usage.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SimpleComboUsageComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxComboModule,
	IgxSimpleComboModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
