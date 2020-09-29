import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { SparklineDisplayTypesComponent } from "./sparkline-display-types/sparkline-display-types.component";
import { IgxSparklineModule } from "igniteui-angular-charts";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SparklineDisplayTypesComponent
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
