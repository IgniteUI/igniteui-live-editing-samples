import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { RemotePagingBatchEditingComponent } from "./grid/grid-batchEditing-remotePaging/batch-editing-remote-paging.component";
import { 
	IgxGridModule,
	IgxDialogModule,
	IgxButtonModule
 } from "igniteui-angular";
import { GridWithTransactions2Component } from "./grid/grid-batchEditing-remotePaging/transaction.component";
import { RemotePagingService } from "./services/remotePaging.service";
import { HttpClientModule } from "@angular/common/http";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	RemotePagingBatchEditingComponent,
	GridWithTransactions2Component
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxDialogModule,
	IgxButtonModule,
	HttpClientModule
],
  providers: [RemotePagingService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
