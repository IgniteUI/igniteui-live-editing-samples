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
import { RemotePagingWithBatchEditingService } from "./services/remotePagingWithBatchEditing.service";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	RemotePagingBatchEditingComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxGridModule,
	IgxDialogModule,
	IgxButtonModule
],
  providers: [RemotePagingWithBatchEditingService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
