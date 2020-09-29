import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CategoryChartHighlightingComponent } from "./highlighting/category-chart-highlighting.component";
import { IgxCategoryChartModule } from "igniteui-angular-charts";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CategoryChartHighlightingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCategoryChartModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
