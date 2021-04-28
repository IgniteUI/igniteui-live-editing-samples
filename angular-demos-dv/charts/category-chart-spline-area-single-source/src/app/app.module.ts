import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CategoryChartSplineAreaSingleSourceComponent } from "./spline-area-single-source/category-chart-spline-area-single-source.component";
import { 
	IgxCategoryChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CategoryChartSplineAreaSingleSourceComponent
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
