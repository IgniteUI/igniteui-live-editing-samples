import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartSynchronizationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxLegendModule,
		IgxDataChartInteractivityModule
  ],
  providers: [SharedData],
  entryComponents: []
})
export class AppModule {}