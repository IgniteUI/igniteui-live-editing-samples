import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxGridModule } from "igniteui-angular";
import { GridRowStylesComponent } from "./grid/grid-rowStyles-sample/grid-rowStyles.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { FinancialDataService } from "./services/financial.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	GridRowStylesComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule
],
  providers: [FinancialDataService],
  schemas: []
})
export class AppModule {}
