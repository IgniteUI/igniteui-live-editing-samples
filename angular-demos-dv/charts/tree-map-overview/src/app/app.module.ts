import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TreeMapOverviewComponent } from "./charts/tree-map/tree-map-overview/tree-map-overview.component";
import { IgxTreemapModule } from "igniteui-angular-charts";
import { IgxButtonModule } from "igniteui-angular";
import { WorldHierarchicalData } from "./charts/tree-map/WorldHierarchicalData";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeMapOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTreemapModule,
		IgxButtonModule
  ],
  providers: [WorldHierarchicalData],
  entryComponents: []
})
export class AppModule {}
