import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges/ES5/igx-linear-gauge-module";
import { LinearGaugeAnimationComponent } from "./linear-gauge-animation/linear-gauge-animation.component";
import { IgxButtonModule } from "igniteui-angular";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LinearGaugeAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxLinearGaugeModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
