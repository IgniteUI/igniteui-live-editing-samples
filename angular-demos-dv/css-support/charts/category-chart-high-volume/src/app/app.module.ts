import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CategoryChartHighVolumeComponent } from "./high-volume/category-chart-high-volume.component";
import { IgxCategoryChartModule } from "igniteui-angular-charts";
import { IgxSliderModule } from "igniteui-angular";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CategoryChartHighVolumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCategoryChartModule,
		IgxSliderModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
