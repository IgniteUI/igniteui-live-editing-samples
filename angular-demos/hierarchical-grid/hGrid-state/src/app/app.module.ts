import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxCheckboxModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";
import { HGridSaveStateComponent } from "./hierarchical-grid/hierarchical-grid-save-state/hGrid-state.component";
import { HGridAboutComponent } from "./hierarchical-grid/hierarchical-grid-save-state/about.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	Router,
	RouterModule
 } from "@angular/router";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	HGridSaveStateComponent,
	HGridAboutComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPreventDocumentScrollModule,
	IgxHierarchicalGridModule,
	IgxCheckboxModule,
	IgxIconModule,
	IgxButtonModule,
	RouterModule.forRoot([{component: HGridAboutComponent, path: 'hGrid-state-about'},{component: HGridSaveStateComponent, path: 'hGrid-state'},{ path: '', redirectTo: '/hGrid-state', pathMatch: 'full' }])
],
  providers: [],
  schemas: []
})
export class AppModule {}
