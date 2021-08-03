import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxPaginatorModule,
	IgxRippleModule,
	IgxButtonGroupModule,
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule
 } from "igniteui-angular";
import { PaginationSampleComponent } from "./pagination/paginator/pagination-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PaginationSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPaginatorModule,
	IgxRippleModule,
	IgxButtonGroupModule,
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
