import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";
import { RadialGaugeTickmarksComponent } from "./radial-gauge-tickmarks/radial-gauge-tickmarks.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RadialGaugeTickmarksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxRadialGaugeModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
