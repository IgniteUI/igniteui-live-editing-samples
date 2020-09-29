import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapTypeScatterSymbolSeriesComponent } from "./maps/geo-map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MapTypeScatterSymbolSeriesComponent
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
