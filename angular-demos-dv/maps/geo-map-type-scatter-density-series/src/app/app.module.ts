import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapTypeScatterDensitySeriesComponent } from "./maps/geo-map-type-scatter-density-series/map-type-scatter-density-series.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	MapTypeScatterDensitySeriesComponent
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
