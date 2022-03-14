import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonGroupModule,
	IgxComboModule,
	IgxSimpleComboModule
 } from "igniteui-angular";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { SimpleComboMainComponent } from "./lists/combo/simple-combo-main/simple-combo-main.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SimpleComboMainComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonGroupModule,
	IgxComboModule,
	IgxFinancialChartModule,
	IgxSimpleComboModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
