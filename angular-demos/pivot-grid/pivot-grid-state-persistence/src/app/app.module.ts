import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxPivotGridModule,
	IgxTooltipModule,
	IgxToastModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { PivotGridStatePersistenceSampleComponent } from "./pivot-grid/pivot-state-persistence/pivot-grid-state-persistence-sample.component";
import { PivotGridAboutComponent } from "./pivot-grid/pivot-state-persistence/about.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	Router,
	RouterModule
 } from "@angular/router";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PivotGridStatePersistenceSampleComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxPivotGridModule,
	IgxTooltipModule,
	PivotGridAboutComponent,
	RouterModule.forRoot([{component: PivotGridAboutComponent, path: 'pivot-grid-about'},{component: PivotGridStatePersistenceSampleComponent, path: 'pivot-grid-state-persistance'},{ path: '', redirectTo: '/pivot-grid-state-persistance', pathMatch: 'full' }]),
	IgxToastModule,
	IgxSwitchModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
