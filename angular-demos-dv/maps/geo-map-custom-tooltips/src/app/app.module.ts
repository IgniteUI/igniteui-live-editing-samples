import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapCustomTooltipsComponent } from "./maps/geo-map-custom-tooltips/map-custom-tooltips.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	MapCustomTooltipsComponent
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
