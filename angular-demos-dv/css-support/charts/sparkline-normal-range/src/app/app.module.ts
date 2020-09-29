import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { SparklineNormalRangeComponent } from "./sparkline-normal-range/sparkline-normal-range.component";
import { IgxSparklineModule } from "igniteui-angular-charts";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SparklineNormalRangeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSparklineModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
