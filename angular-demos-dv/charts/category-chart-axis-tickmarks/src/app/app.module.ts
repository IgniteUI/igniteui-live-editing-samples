import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CategoryChartAxisTickmarksComponent } from "./axis-tickmarks/category-chart-axis-tickmarks.component";
import { 
	IgxCategoryChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CategoryChartAxisTickmarksComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxCategoryChartModule,
	IgxLegendModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
