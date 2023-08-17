import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxIconModule } from "igniteui-angular";
import { MaterialSymbolsComponent } from "./data-display/icon/material-symbols/material-symbols.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	MaterialSymbolsComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxIconModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
