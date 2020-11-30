import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges";
import { RadialGaugeAnimationComponent } from "./radial-gauge-animation/radial-gauge-animation.component";
import { IgxButtonModule } from "igniteui-angular";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RadialGaugeAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxRadialGaugeModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
