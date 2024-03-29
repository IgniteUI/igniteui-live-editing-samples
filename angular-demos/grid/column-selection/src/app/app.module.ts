import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridColumnSelectionComponent } from "./grid/column-selection-sample/column-selection-sample.component";
import { 
	IgxGridModule,
	IgxSelectModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridColumnSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxGridModule,
	IgxSelectModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
