import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ZoomSliderOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxZoomSliderDynamicModule,
		IgxNumericYAxisModule,
		IgxNumericXAxisModule,
		IgxCrosshairLayerModule,
		IgxDataChartScatterModule,
		IgxDataChartScatterCoreModule,
		IgxDataChartCoreModule,
		IgxDataChartCategoryModule,
		IgxDataChartCategoryCoreModule,
		IgxDataChartAnnotationModule,
		IgxDataChartInteractivityModule,
		IgxBubbleSeriesModule
  ],
  providers: [SampleScatterStats],
  entryComponents: []
})
export class AppModule {}
