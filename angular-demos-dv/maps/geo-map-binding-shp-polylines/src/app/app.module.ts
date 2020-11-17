import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapBindingShapefilePolylinesComponent } from "./maps/geo-map-binding-shp-polylines/map-binding-shp-polylines.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MapBindingShapefilePolylinesComponent
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
