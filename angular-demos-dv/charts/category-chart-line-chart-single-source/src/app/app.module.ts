import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CategoryChartLineChartSingleSourceComponent } from "./line-chart-single-source/category-chart-line-chart-single-source.component";
import { 
	IgxCategoryChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CategoryChartLineChartSingleSourceComponent
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
