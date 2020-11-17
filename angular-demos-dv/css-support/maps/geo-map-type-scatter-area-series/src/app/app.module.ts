import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapTypeScatterAreaSeriesComponent } from "./maps/geo-map-type-scatter-area-series/map-type-scatter-area-series.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MapTypeScatterAreaSeriesComponent
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
