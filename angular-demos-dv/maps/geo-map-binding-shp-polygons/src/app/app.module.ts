import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapBindingShapefilePolygonsComponent } from "./maps/geo-map-binding-shp-polygons/map-binding-shp-polygons.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MapBindingShapefilePolygonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxGeographicMapModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
