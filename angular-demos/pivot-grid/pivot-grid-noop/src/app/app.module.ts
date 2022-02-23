import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPivotGridModule } from "igniteui-angular";
import { PivotGridNoopSampleComponent } from "./pivot-grid/pivot-grid-noop/pivot-grid-noop-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { PivotDataService } from "./services/pivotRemoteData.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PivotGridNoopSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxPivotGridModule
],
  providers: [PivotDataService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
