import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapMarkerTypeComponent } from "./maps/geo-map-marker-type/map-marker-type.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	MapMarkerTypeComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxGeographicMapModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
