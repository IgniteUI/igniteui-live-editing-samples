import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxIconModule } from "igniteui-angular";
import { SvgIconSampleComponent } from "./svg-icon-sample/svg-icon-sample.component";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SvgIconSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxIconModule,
	HttpClientModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
