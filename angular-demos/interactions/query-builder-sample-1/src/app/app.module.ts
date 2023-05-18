import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxQueryBuilderModule } from "igniteui-angular";
import { QueryBuilderSample1Component } from "./query-builder-sample-1/query-builder-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	QueryBuilderSample1Component
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
