import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CRUDSampleComponent } from "./grid/grid-crud-sample/crud-sample.component";
import { 
	IgxActionStripModule,
	IgxGridModule
 } from "igniteui-angular";
import { HttpClientModule } from "@angular/common/http";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { CRUDService } from "./services/crud.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CRUDSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxActionStripModule,
	HttpClientModule
],
  providers: [CRUDService],
  schemas: []
})
export class AppModule {}
