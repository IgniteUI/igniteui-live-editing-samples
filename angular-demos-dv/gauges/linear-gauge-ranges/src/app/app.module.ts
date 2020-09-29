import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { LinearGaugeRangesComponent } from "./linear-gauge-ranges/linear-gauge-ranges.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LinearGaugeRangesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxLinearGaugeModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
