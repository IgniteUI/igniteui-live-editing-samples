import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPivotGridModule } from "igniteui-angular";
import { PivotGridNoopPersistenceSampleComponent } from "./pivot-grid/pivot-grid-noop-persistence/pivot-grid-noop-persistence-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { PivotDataService } from "./services/pivotRemoteData.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PivotGridNoopPersistenceSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxPivotGridModule
],
  providers: [PivotDataService],
  schemas: []
})
export class AppModule {}
