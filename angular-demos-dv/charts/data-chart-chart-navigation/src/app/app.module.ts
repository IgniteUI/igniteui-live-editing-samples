import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartScatterCoreModule,
		IgxDataChartScatterModule,
		IgxNumberAbbreviatorModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SampleScatterStats],
  entryComponents: []
})
export class AppModule {}
