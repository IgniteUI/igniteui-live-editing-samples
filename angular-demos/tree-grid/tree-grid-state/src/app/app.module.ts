import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxTreeGridModule } from "igniteui-angular";
import { TGridSaveStateComponent } from "./tree-grid-save-state/tGrid-state.component";
import { TGridAboutComponent } from "./tree-grid-save-state/about.component";
import { 
	Router,
	RouterModule
 } from "@angular/router";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	TGridSaveStateComponent,
	TGridAboutComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxTreeGridModule,
	RouterModule.forRoot([{component: TGridAboutComponent, path: 'tree-grid-state-about'},{component: TGridSaveStateComponent, path: 'tree-grid-state'},{ path: '', redirectTo: '/tree-grid-state', pathMatch: 'full' }])
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
