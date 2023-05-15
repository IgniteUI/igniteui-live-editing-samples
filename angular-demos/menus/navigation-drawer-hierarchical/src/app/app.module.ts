import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule,
	IgxTreeModule
 } from "igniteui-angular";
import { NavDrawerHierarchicalComponent } from "./nav-drawer-hierarchical/nav-drawer-hierarchical.component";
import { RouterModule } from "@angular/router";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	NavDrawerHierarchicalComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule,
	IgxTreeModule,
	RouterModule.forRoot([
                        { path: 'grid', component: NavDrawerHierarchicalComponent, data: { displayName: 'Grid' } },
                        { path: 'tree-grid', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Tree Grid' } },
                        { path: 'hierarchical-grid', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Hierarchical Grid' } },
                        { path: 'pivot-grid', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Pivot Grid' } },
                        { path: 'area-chart', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Area Chart' } },
                        { path: 'bar-chart', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Bar Chart' } },
                        { path: 'column-chart', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Column Chart' } },
                        { path: 'pie-chart', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Pie Chart' } },
                        { path: 'action-strip', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Action Strip' } },
                        { path: 'dialog', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Dialog' } },
                        { path: 'drag-drop', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Drag and Drop' } },
                        { path: 'dock-manager', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Dock Manager' } },
                        { path: 'expansion-panel', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Exspansion Panel' } },
                        { path: 'layout', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Layout Manager' } },
                        { path: 'banner', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Banner' } },
                        { path: 'snackbar', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Snackbar' } },
                        { path: 'toast', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Toast' } }
                    ])
],
  providers: [],
  schemas: []
})
export class AppModule {}
