import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapNavigationComponent } from "./maps/geo-map-navigation/map-navigation.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MapNavigationComponent
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
