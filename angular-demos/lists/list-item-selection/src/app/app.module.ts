import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxFilterModule,
	IgxIconModule,
	IgxListModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { ListItemSelectionComponent } from "./list-item-selection/list-item-selection.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ListItemSelectionComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxAvatarModule,
	IgxFilterModule,
	IgxIconModule,
	IgxListModule,
	IgxInputGroupModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
