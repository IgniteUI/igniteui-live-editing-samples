import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxQueryBuilderModule } from "igniteui-angular";
import { QueryBuilderStyleComponent } from "./query-builder-style/query-builder-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	QueryBuilderStyleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxQueryBuilderModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
