import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxComboModule } from "igniteui-angular";
import { SimpleComboCascadingComponent } from "./simple-combo-cascading/simple-combo-cascading.component";



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
	IgxComboModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
