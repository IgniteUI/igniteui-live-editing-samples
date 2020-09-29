import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { SparklineUnknownValuesComponent } from "./sparkline-unknown-values/sparkline-unknown-values.component";
import { IgxSparklineModule } from "igniteui-angular-charts";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SparklineUnknownValuesComponent
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
